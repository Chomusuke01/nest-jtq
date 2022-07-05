import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { instanceToPlain, plainToClass } from "class-transformer";
import { Repository } from "typeorm";
import { QueueDTO } from "./dto/QueueDTO";
import { QueueEntity } from "./DataAccess/QueueEntity";
import { QueueTransformer } from "./DataAccess/QueueTransformer";
import { Page } from "../Paginator/Page";
import { QueueSearchCriteriaTo } from "./dto/QueueSearchCriteriaTo"

@Injectable()
export class QueueManagementService{

    constructor(@InjectRepository(QueueEntity) private queueRepository: Repository<QueueEntity>) {

    }

    async findQueues(criteria: QueueSearchCriteriaTo): Promise<Page> {
        const queueCrit = this.queueRepository
            .createQueryBuilder('queue')

        if (criteria.name != undefined && criteria.name != "") {
            queueCrit.andWhere("queue.name = :name", { name: criteria.name });
        }

        if (criteria.logo != undefined && criteria.logo != "") {
            queueCrit.andWhere("queue.logo = :logo", { logo: criteria.logo });
        }

        if (criteria.currentNumber != undefined && criteria.currentNumber != "") {
            queueCrit.andWhere("queue.currentNumber = :currentNumber", { currentNumber: criteria.currentNumber });
        }

        if (criteria.attentionTime != undefined && criteria.attentionTime != null) {
            queueCrit.andWhere("queue.attentionTime = :attentionTime", { attentionTime: criteria.attentionTime });
        }

        if (criteria.minAttentionTime != null && criteria.minAttentionTime != undefined) {
            queueCrit.andWhere("queue.minAttentionTime = :minAttentionTime", { minAttentionTime: criteria.minAttentionTime });
        }

        if (criteria.active != null && criteria.active != undefined) {
            queueCrit.andWhere("queue.active = :active", { active: criteria.active });
        }

        if (criteria.customers != null && criteria.customers != undefined) {
            queueCrit.andWhere("queue.customers = :customers", { customers: criteria.customers });
        }

        let start = (criteria.pageable.pageNumber * criteria.pageable.pageSize);
        let end = start + criteria.pageable.pageSize;
        queueCrit.skip(start)
        queueCrit.take(end)

        let response = new Page();
        response.content = await queueCrit.getMany();
        response.totalElements = response.content.length;
        response.pageable = criteria.pageable;

        return response;
    }

    async findQueue(id: number): Promise<QueueDTO> {
        let foundEntity = await this.queueRepository.findOne({
            where: {
                id: id
            }
        });

        if (foundEntity != null) {
            let dto = QueueTransformer.entityToDto(foundEntity);
            return dto;
        }
        console.log(`La cola solicitada, con id ${id} no existe`);
        return null;
    }

    async saveQueue(queue: QueueDTO): Promise<QueueDTO> {

        let qEntity = QueueTransformer.jsonToEntity(queue);

        let bdEntity = await this.queueRepository.save(qEntity);

        let dto = QueueTransformer.entityToDto(bdEntity);
        return dto;
    }

    async deleteQueue(id: number): Promise<boolean> {
        await this.queueRepository.delete(id);
        let queue = await this.queueRepository.findOne({
            where: {
                id: id
            }
        });

        if (queue == null) {//Esto es temporal
            console.log("borrado");
            return true;
        }
        else {
            console.log("no borrado");
            return false;
        }
    }
    

}