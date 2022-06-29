import { Module} from "@nestjs/common";
import { loginService } from "./login.service";
import { loginController } from "./login.controller";

@Module({
    controllers: [loginController],
    providers: [loginService],
})
export class loginModule {}

