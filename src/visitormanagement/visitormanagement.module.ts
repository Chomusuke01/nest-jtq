import { Module } from "@nestjs/common";
import { visitormanagementController } from "./visitormanagement.controller";
import { visitormanagementService } from "./visitormanagement.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from "./DataAccess/visitorEntity";

@Module({
    imports: [TypeOrmModule.forFeature(
        [VisitorEntity]
      )],
    controllers: [visitormanagementController],
    providers: [visitormanagementService],
})
export class VisitormanagementModule{}