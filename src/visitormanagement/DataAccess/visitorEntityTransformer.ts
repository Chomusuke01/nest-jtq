import { visitorDTO } from "../dto/visitor.dto";
import { VisitorEntity } from "./visitorEntity";

export class VisitorEntityTransformer {

    public static entityToDto(visitorEntity: VisitorEntity) : visitorDTO {
        let dto: visitorDTO = new visitorDTO();

        dto.username = visitorEntity.username;
        dto.name = visitorEntity.name;
        dto.phoneNumber = visitorEntity.phoneNumber;
        dto.password = visitorEntity.password;
        dto.acceptedCommercial = visitorEntity.acceptedCommercial;
        dto.acceptedTerms = visitorEntity.acceptedTerms;
        dto.userType = visitorEntity.userType;

        return dto;
    }

     public static dtoToEntity(visitorDto: visitorDTO) : VisitorEntity {
        let entity: VisitorEntity = new VisitorEntity();

        entity.username = visitorDto.username;
        entity.name = visitorDto.name;
        entity.phoneNumber = visitorDto.phoneNumber;
        entity.password = visitorDto.password;
        entity.acceptedCommercial = visitorDto.acceptedCommercial;
        entity.acceptedTerms = visitorDto.acceptedTerms;
        entity.userType = visitorDto.userType;

        return entity;
    }
}