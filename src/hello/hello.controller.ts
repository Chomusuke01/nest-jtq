import { Controller, Get, Post, Body, Param } from "@nestjs/common";

import { HelloDto } from "./dto/hello.dto";

@Controller('hello')
export class HelloController {

    @Get()
    getHello(): string{
        return 'Hola gente';
    }

    @Post()
    sayHello(@Body() Hello: HelloDto): string{
        return 'Hola ' + Hello.name;
    }

    @Get(':name')
    sayHelloGet(@Param('name') name): string{
        return 'Hola ' + name + ', ten un buen día';
    }
}