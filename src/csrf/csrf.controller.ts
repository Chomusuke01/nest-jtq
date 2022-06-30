import { Controller, Res, Get, Req } from "@nestjs/common";

@Controller('csrf/v1')
export class csrfController {

    @Get('/token')
    getToken(@Req() request, @Res() response){
        let tok = request.csrfToken();
        response.cookie('XSRF-TOKEN', tok);
        response.send({token: tok});
    }

}