import { Injectable } from "@nestjs/common";
import { AccessCodeEntity } from "./DataAccess/accessCodeEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VisitorEntity } from "src/visitormanagement/DataAccess/visitorEntity";
import { QueueEntity } from "src/queuemanagement/DataAccess/QueueEntity";
import { AccessCodeDTO } from "./DTO/accesscode.dto";

@Injectable()
export class accesscodemanagementService{
    
    constructor(@InjectRepository(AccessCodeEntity) private accessCodeRepository: Repository<AccessCodeEntity>,
    @InjectRepository(VisitorEntity) private visitorRepository: Repository<VisitorEntity>,
    @InjectRepository(QueueEntity) private queueRepository: Repository<QueueEntity>)
    {}

    async findAccessCodeCtos(criteria){
        let queue = await this.queueRepository.findOne({
            where: {
                id: 1 // BUEEEEEENO
            }
        });


      
        let visitor = await this.visitorRepository.findOne({
            where:{
                username: "patata3@hola.com"
            }
        })
        console.log(visitor);

    }

    saveAccessCode(){

    }

    deleteAccessCode(){

    }

    private aux(){

    }
}