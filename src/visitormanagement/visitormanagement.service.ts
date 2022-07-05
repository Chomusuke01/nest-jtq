import { Injectable } from "@nestjs/common";
import { visitorDTO } from "./dto/visitor.dto";
import { Repository } from "typeorm";
import { VisitorEntity } from "./DataAccess/visitorEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { VisitorEntityTransformer } from "./DataAccess/visitorEntityTransformer";
import { hashSync } from 'bcrypt'

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
            return null;
        }

        visitor.password = await hashSync(visitor.password, 8);

        let vEntity = VisitorEntityTransformer.dtoToEntity(visitor);

        let rpEntity = await this.visitorRepository.save(vEntity);

        return  VisitorEntityTransformer.entityToDto(rpEntity);
    }


    //Provisional para comprobar que los usuarios se registran bien.
    async findByUsername()  {//Discutir si este metodo hace realmente falta
        
        let user = new VisitorEntity();
        user.acceptedCommercial = true;
        user.acceptedTerms = true;
        user.id = 5000;
        user.name = "test";
        user.password = await hashSync("123", 8);
        user.phoneNumber = "12345";
        user.userType = true;
        user.username = "test@test.com";

        await this.visitorRepository.save(user);
        console.log(user);
        
    }

}