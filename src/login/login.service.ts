import { Injectable } from "@nestjs/common";
import { loginDTO } from "./DTO/login.dto";
import { Repository } from "typeorm";
import { VisitorEntity } from "../visitormanagement/DataAccess/visitorEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { compareSync } from 'bcrypt';
import { VisitorEntityTransformer } from "src/visitormanagement/DataAccess/visitorEntityTransformer";

@Injectable()
export class loginService {

    constructor(@InjectRepository(VisitorEntity) private visitorRepository: Repository<VisitorEntity>) {}

    async loginVisitor(login: loginDTO){
        let entity = await this.visitorRepository.findOne({
            where: {
                username: login.username
            }
        });

        if (entity == null) {
            throw new Error(`${login.username} is not registered`);
        }

        
        if (compareSync(login.password, entity.password)){
            return VisitorEntityTransformer.entityToDto(entity);;
        }
            
        return null;
    }
}