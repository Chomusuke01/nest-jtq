import { Module } from "@nestjs/common";
import { accesscodemanagementController } from "./accesscodemanagement.controller";
import { accesscodemanagementService } from "./accesscodemanagement.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessCodeEntity } from "./DataAccess/accessCodeEntity";

@Module({
    imports: [TypeOrmModule.forFeature(
        [AccessCodeEntity]
      )],
    controllers: [accesscodemanagementController],
    providers: [accesscodemanagementService],

})
export class accesscodemanagementModule {}