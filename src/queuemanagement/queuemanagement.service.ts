import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { instanceToPlain, plainToClass } from "class-transformer";
import { Repository } from "typeorm";
import { QueueDTO } from "./dto/QueueDTO";
import { QueueEntity } from "./DataAccess/QueueEntity";
import { QueueTransformer } from "./DataAccess/QueueTransformer";

@Injectable()
export class QueueManagementService{

    constructor(@InjectRepository(QueueEntity) private queueRepository: Repository<QueueEntity>) {

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
    

}