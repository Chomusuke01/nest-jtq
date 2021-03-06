import { Module} from "@nestjs/common";
import { loginService } from "./login.service";
import { loginController } from "./login.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from "../visitormanagement/DataAccess/visitorEntity";

@Module({
    imports: [TypeOrmModule.forFeature(
        [VisitorEntity]
      )],
    controllers: [loginController],
    providers: [loginService],
})
export class loginModule {}

