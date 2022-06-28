import { Module } from "@nestjs/common";
import { visitormanagementController } from "./visitormanagement.controller";
import { visitormanagementService } from "./visitormanagement.service";

@Module({
    controllers: [visitormanagementController],
    providers: [visitormanagementService],
})
export class VisitormanagementModule{}