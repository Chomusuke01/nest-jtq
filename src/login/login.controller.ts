import { Controller, Post, Res, HttpStatus, Body, Get } from "@nestjs/common";
import { loginService } from "./login.service";
import { loginDTO } from "./DTO/login.dto";

@Controller('login')
export class loginController {

    constructor(private loginService: loginService){}

    @Post()
    async loginVisitor(@Res() res, @Body() loginDTO: loginDTO){
        console.log(loginDTO);
        let isRegistered = this.loginService.loginVisitor(loginDTO);
        return true
    }

    // res.status(HttpStatus.OK).json({
    //     message: 'Loggeado'
    // });
}