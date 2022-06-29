import { Controller, Post, Res, HttpStatus, Body, Get } from "@nestjs/common";
import { loginService } from "./login.service";

@Controller('login')
export class loginController {}