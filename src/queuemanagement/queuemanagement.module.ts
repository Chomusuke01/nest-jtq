import { Module } from "@nestjs/common";
import { QueueManagementController } from "./queuemanagement.controller";
import { QueueManagementService } from "./queuemanagement.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueEntity } from "./DataAccess/QueueEntity";

@Module({
    imports: [TypeOrmModule.forFeature(
        [QueueEntity]
      )],
    controllers: [QueueManagementController],
    providers: [QueueManagementService],
})
export class QueuemanagementModule{}