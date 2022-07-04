import { Controller, Post,Body, Delete, Param } from "@nestjs/common";


@Controller('accesscodemanagement/v1/accesscode')
export class accesscodemanagementController{

    @Post('/cto/search')
    findAccessCodeCtos(@Body() criteria){
        console.log("Hola");
        console.log(criteria);

    }

    @Delete('/accesscode/:id')
    deleteAccessCode(@Param('id') id: string){
        
    }

    @Post('/accesscode')
    saveAccessCode(@Body() accessCode){

    }
}