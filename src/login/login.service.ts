import { Injectable } from "@nestjs/common";
import { loginDTO } from "./DTO/login.dto";
import { Repository } from "typeorm";
import { VisitorEntity } from "../visitormanagement/DataAccess/visitorEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { VisitorEntityTransformer } from "../visitormanagement/DataAccess/visitorEntityTransformer";
import { hashSync, compareSync } from 'bcrypt';

@Injectable()
export class loginService {

    constructor(@InjectRepository(VisitorEntity) private visitorRepository: Repository<VisitorEntity>) {
    }

    async loginVisitor(login: loginDTO){
        let entity = await this.visitorRepository.findOne({
            where: {
                username: login.username
            }
        });

        if (entity != null) {
            throw new Error(`${login.username} is not registered`);
        }

        console.log(entity);

        return compareSync(login.password, entity.password);
    }
}