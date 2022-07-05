import { Controller, Post,Body, Delete, Param, Get, Res } from "@nestjs/common";
import { accesscodemanagementService } from "./accesscodemanagement.service";
import { AccessCodeDTO } from "./DTO/accesscode.dto";



@Controller('accesscodemanagement/v1/accesscode')
export class accesscodemanagementController{

    constructor(private accessCodeService: accesscodemanagementService){}

    @Post('/cto/search')
    async findAccessCodeCtos(@Res() res,@Body() criteria){
        let dto = await this.accessCodeService.findAccessCodeCtos(criteria);
        let ctos = {content: [dto]};
        res.send(ctos);
    }

    @Delete('/:id/')
    async deleteAccessCode(@Param('id') id: string){
        await this.accessCodeService.deleteAccessCode(parseInt(id));
    }

    @Post('/')
    async saveAccessCode(@Res()res, @Body() accessCode){
        let dto = await this.accessCodeService.saveAccessCode(accessCode);
        res.send(dto);
    }

    @Get('/debug/add')
    testAdd(){
        this.accessCodeService.debugAdd();
    }

    @Get('/debug/get/:id')
    testGet(@Param('id') id :string){
        return this.accessCodeService.debugGet(parseInt(id));
    }

    @Get('/debug/getAll')
    testGetAll(){
        this.accessCodeService.debugGetAll();
    }
}