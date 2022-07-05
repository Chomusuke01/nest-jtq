import { Injectable } from "@nestjs/common";
import { AccessCodeEntity } from "./DataAccess/accessCodeEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VisitorEntity } from "src/visitormanagement/DataAccess/visitorEntity";
import { QueueEntity } from "src/queuemanagement/DataAccess/QueueEntity";
import { AccessCodeDTO } from "./DTO/accesscode.dto";
import { QueueTransformer } from "src/queuemanagement/DataAccess/QueueTransformer";
import { AccessCodeEntityTransformer } from "./DataAccess/accessCodeEntity.transformer";
import { VisitorEntityTransformer } from "src/visitormanagement/DataAccess/visitorEntityTransformer";


@Injectable()
export class accesscodemanagementService{
    
    constructor(@InjectRepository(AccessCodeEntity) private accessCodeRepository: Repository<AccessCodeEntity>,
    @InjectRepository(VisitorEntity) private visitorRepository: Repository<VisitorEntity>,
    @InjectRepository(QueueEntity) private queueRepository: Repository<QueueEntity>)
    {}

    async findAccessCodeCtos(criteria){
        let queue = await this.queueRepository.findOne({
            where: {
                active: true
            }
        });
        
        let dto = new AccessCodeDTO();
        dto.queue = QueueTransformer.entityToDto(queue);

        if (criteria.username){
            let user = await this.visitorRepository.findOne({
                where: {
                    username: criteria.username
                }
            });
            dto.visitor = VisitorEntityTransformer.entityToDto(user);
            
            let accessCode = await this.accessCodeRepository.findOne({
                where: {
                    visitor_id: user.id
                }
            });
            
            if (accessCode == null){
                dto.accessCode = null;
            }else{
                dto.accessCode = AccessCodeEntityTransformer.entityToETO(accessCode);
            }
            
        }
        else{
            const [list, count] = await this.accessCodeRepository.createQueryBuilder('accesscode')
            .select(['accesscode.id','accesscode.visitor_id'])
            .orderBy({'accesscode.ticketNumber': 'ASC'})
            .getMany();
            
            if (list == undefined){
                return null;
            }
            let user = await this.visitorRepository.findOne({
                where: {
                    id: list.visitor_id
                }
            });

            let accessCode = await this.accessCodeRepository.findOne({
                where: {
                    id: list.id
                }
            });

            dto.accessCode = AccessCodeEntityTransformer.entityToETO(accessCode);
            dto.visitor = VisitorEntityTransformer.entityToDto(user);
        }

        return dto;
    }

    async saveAccessCode(accessCode){
        
        let entityAC = new AccessCodeEntity();

        const [list, count] = await this.accessCodeRepository.createQueryBuilder('accesscode')
            .select(['accesscode.ticketNumber'])
            .orderBy({'accesscode.ticketNumber': 'DESC'})
            .getMany();

        let ticketNumber = " ";
        if (list == undefined){
            ticketNumber = "Q000";
        }else{
            ticketNumber = list.ticketNumber;
        }
        
        entityAC.ticketNumber = this.generateTicketNumber(ticketNumber);
        entityAC.creationTime = Date.now().toString();
        entityAC.startTime = Date.now().toString();
        entityAC.endTime = null;
        entityAC.visitor_id = accessCode.visitorId;
        entityAC.queue_id = accessCode.queueId;
        await this.accessCodeRepository.save(entityAC);
    
        return AccessCodeEntityTransformer.entityToETO(entityAC);
    }

    async deleteAccessCode(id: number){
        
        
        let entity = await this.accessCodeRepository.findOne({
            where:{
                id: id
            }
        });
       
        await this.accessCodeRepository.remove(entity);
    }

    private  generateTicketNumber(ticket:string): string{
        
        let num: number = parseInt(ticket.split('Q')[1]) + 1;
        if (num < 10){
            ticket = "Q00" + num.toString();
        }
        else if (num < 100){
            ticket = "Q0" + num.toString();
        }
        else{
            ticket = "Q" + num.toString();
        }

        return ticket;
    }

    async debugAdd(){
        let entity = new AccessCodeEntity();
        entity.ticketNumber = "Q001";
        entity.creationTime = '1';
        entity.endTime = '1';
        entity.startTime = '1';
        entity.visitor_id = 5000;
        entity.queue_id = 1;
        await this.accessCodeRepository.save(entity);
        console.log(entity);
    }

    async debugGet(id: number){
        let entity = await this.accessCodeRepository.findOne({
            where: {
                id: id
            }
        })
        return entity.id;
    }

    async debugGetAll(){
        const [list, count] = await this.accessCodeRepository.createQueryBuilder('accesscode')
        .select(['accesscode.ticketNumber', 'accesscode.id'])
        .orderBy({'accesscode.id': 'DESC'})
        .getMany();
        //this.generateTicketNumber("Q099");

    }

}