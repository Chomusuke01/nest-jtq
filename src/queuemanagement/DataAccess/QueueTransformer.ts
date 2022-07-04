import { QueueDTO } from "../dto/QueueDTO";
import { QueueEntity } from "./QueueEntity";

export class QueueTransformer {

    public static entityToDto(queueEntity: QueueEntity) : QueueDTO {
        let dto: QueueDTO = new QueueDTO();

        dto.name = queueEntity.name;
        dto.logo = queueEntity.logo;
        dto.currentNumber = queueEntity.currentNumber;
        dto.attentionTime = queueEntity.attentionTime;
        dto.minAttentionTime = queueEntity.minAttentionTime;
        dto.active = queueEntity.active;
        dto.customers = queueEntity.customers;

        return dto;
    }

    public static dtoToEntity(queueDto: QueueDTO) : QueueEntity {
        let entity: QueueEntity = new QueueEntity();

        entity.name = queueDto.name;
        entity.logo = queueDto.logo;
        entity.currentNumber = queueDto.currentNumber;
        entity.attentionTime = queueDto.attentionTime;
        entity.minAttentionTime = queueDto.minAttentionTime;
        entity.active = queueDto.active;
        entity.customers = queueDto.customers;
        return entity;
    }

    public static jsonToEntity(json : any) : QueueEntity{

        let jsonData = JSON.stringify(json);
        let queueEnt: QueueEntity = JSON.parse(jsonData);

        return queueEnt;
    }
}