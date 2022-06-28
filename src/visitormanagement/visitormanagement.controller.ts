import { Controller, Post, Res, HttpStatus, Body, Get } from "@nestjs/common";
import { visitorDTO } from "./dto/visitor.dto";
import { visitormanagementService } from "./visitormanagement.service";

@Controller('visitormanagement/v1')
export class visitormanagementController {

    constructor(private visitorService: visitormanagementService){}

    @Post('/visitor')
    registerVisitor(@Res() res, @Body() visitorDTO: visitorDTO){
        console.log(visitorDTO);
        this.visitorService.registerVisitor(visitorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Registrado'
        });
    }

    // Metodo provisional para comprobar que registra usuarios
    @Get('/visitor/debug/getAll')
    getVisitors(): visitorDTO[]{
        return this.visitorService.getVisitors();
    }
}