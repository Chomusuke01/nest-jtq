import { Injectable } from "@nestjs/common";
import { visitorDTO } from "./dto/visitor.dto";
import { Repository } from "typeorm";
import { VisitorEntity } from "./DataAccess/visitorEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { VisitorEntityTransformer } from "./DataAccess/visitorEntityTransformer";

@Injectable()
export class visitormanagementService {

    constructor(@InjectRepository(VisitorEntity) private visitorRepository: Repository<VisitorEntity>) {
    }
    

    async registerVisitor(visitor: visitorDTO): Promise<visitorDTO> {

        let entity = await this.visitorRepository.findOne({
            where: {
                username: visitor.username
            }
        });

        if (entity != null) {
            throw new Error(`${visitor.username} is already registered`);
        }

        let vEntity = VisitorEntityTransformer.dtoToEntity(visitor);

        let rpEntity = await this.visitorRepository.save(vEntity);

        let dto = VisitorEntityTransformer.entityToDto(rpEntity);
        return dto;
    }


    //Provisional para comprobar que los usuarios se registran bien.
    async findByUsername(username: string): Promise<visitorDTO> {//Discutir si este metodo hace realmente falta
        
        let foundEntity = await this.visitorRepository.findOne({
            where: {
                username: username
            }
        });

        return VisitorEntityTransformer.entityToDto(foundEntity);
    }

}