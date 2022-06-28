import { Injectable } from "@nestjs/common";
import { visitorDTO } from "./dto/visitor.dto";

@Injectable()
export class visitormanagementService {

    private visitors: visitorDTO[] = [];
    

    registerVisitor(visitor: visitorDTO):void {
        this.visitors.push(visitor);
    }


    //Provisional para comprobar que los usuarios se registran bien.
    getVisitors(): visitorDTO[]{
        return this.visitors;
    }

}