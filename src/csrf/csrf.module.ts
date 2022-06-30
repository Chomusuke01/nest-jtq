import { Module} from "@nestjs/common";
import { csrfController } from "./csrf.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from "../visitormanagement/DataAccess/visitorEntity";

@Module({
    imports: [TypeOrmModule.forFeature(
        [VisitorEntity]
      )],
    controllers: [csrfController],
    providers: [],
})
export class csrfModule {}