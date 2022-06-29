import { Controller, Post, Res, HttpStatus, Body, Get, Param } from "@nestjs/common";
import { visitorDTO } from "./dto/visitor.dto";
import { visitormanagementService } from "./visitormanagement.service";

@Controller('visitormanagement/v1')
export class visitormanagementController {

    constructor(private visitorService: visitormanagementService){}

    @Post('/visitor')
    registerVisitor(@Res() res, @Body() visitorDTO: visitorDTO){
        console.log(visitorDTO);
        let dto = this.visitorService.registerVisitor(visitorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Registrado'
        });
    }

    // Metodo provisional para comprobar que registra usuarios
    @Get('/visitor/debug/:username')
    async getVisitors(@Param('username') username: string): Promise<visitorDTO>{
        return this.visitorService.findByUsername(username);
    }
}