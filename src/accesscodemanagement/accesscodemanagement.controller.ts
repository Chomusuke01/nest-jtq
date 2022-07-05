import { Controller, Post,Body, Delete, Param } from "@nestjs/common";
import { accesscodemanagementService } from "./accesscodemanagement.service";


@Controller('accesscodemanagement/v1/accesscode')
export class accesscodemanagementController{

    constructor(private accessCodeService: accesscodemanagementService){}

    @Post('/cto/search')
    findAccessCodeCtos(@Body() criteria){
        //console.log(criteria);
        this.accessCodeService.findAccessCodeCtos(criteria);
    }

    @Delete('/accesscode/:id')
    deleteAccessCode(@Param('id') id: string){

    }

    @Post('/accesscode')
    saveAccessCode(@Body() accessCode){

    }
}