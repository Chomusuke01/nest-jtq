import { Controller, Post, Res, HttpStatus, Body, Get } from "@nestjs/common";
import { loginService } from "./login.service";
import { loginDTO } from "./DTO/login.dto";
import { VisitorEntityTransformer } from "src/visitormanagement/DataAccess/visitorEntityTransformer";
import { VisitorEntity } from "src/visitormanagement/DataAccess/visitorEntity";
import { visitorDTO } from "src/visitormanagement/dto/visitor.dto";

@Controller('login')
export class loginController {

    constructor(private loginService: loginService){}

    @Post()
    async loginVisitor(@Res() res, @Body() loginDTO: loginDTO){
        let loginDto = await this.loginService.loginVisitor(loginDTO);
        if (loginDto != null){
            //return loginDto;
            res.send(loginDto)
        }else{
            res.status(HttpStatus.NOT_FOUND).json({
                message: 'El ususario no existe'
            });
        }
    }
}