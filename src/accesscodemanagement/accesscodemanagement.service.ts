import { Injectable } from "@nestjs/common";
import { AccessCodeEntity } from "./DataAccess/accessCodeEntity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class accesscodemanagementService{
    
    constructor(@InjectRepository(AccessCodeEntity) private visitorRepository: Repository<AccessCodeEntity>) {
    }

    findAccesCodeCtos(){

    }

    saveAccessCode(){

    }

    deleteAccessCode(){

    }
}