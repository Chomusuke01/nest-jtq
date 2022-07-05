import { Module } from "@nestjs/common";
import { accesscodemanagementController } from "./accesscodemanagement.controller";
import { accesscodemanagementService } from "./accesscodemanagement.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessCodeEntity } from "./DataAccess/accessCodeEntity";
import { VisitorEntity } from "src/visitormanagement/DataAccess/visitorEntity";
import { QueueEntity } from "src/queuemanagement/DataAccess/QueueEntity";

@Module({
    imports: [TypeOrmModule.forFeature(
        [AccessCodeEntity,VisitorEntity,QueueEntity]
      )],
    controllers: [accesscodemanagementController],
    providers: [accesscodemanagementService],

})
export class accesscodemanagementModule {}