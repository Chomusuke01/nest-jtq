import { Controller, Post, Res, HttpStatus, Body, Get, Param } from "@nestjs/common";
import { visitorDTO } from "./dto/visitor.dto";
import { visitormanagementService } from "./visitormanagement.service";

@Controller('visitormanagement/v1')
export class visitormanagementController {

    constructor(private visitorService: visitormanagementService){}

    @Post('/visitor')
    async registerVisitor(@Res() res, @Body() visitorDTO: visitorDTO){
        let dto = await this.visitorService.registerVisitor(visitorDTO);
        
        if (dto != null){
            res.send(dto);
        }
        else{
            res.status(HttpStatus.CONFLICT).json({
                message: "El usuario ya existe"
            });
        }
    }

    // Metodo provisional para comprobar que registra usuarios
    @Get('/visitor/debug/add')
    async getVisitors(){
        this.visitorService.findByUsername();
    }
}