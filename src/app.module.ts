import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitormanagementModule } from './visitormanagement/visitormanagement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from './visitormanagement/DataAccess/visitorEntity';
import { loginModule } from './login/login.module';
import { csrfModule } from './csrf/csrf.module';
import { accesscodemanagementModule } from './accesscodemanagement/accesscodemanagement.module';
import { AccessCodeEntity } from './accesscodemanagement/DataAccess/accessCodeEntity';
import { QueueEntity } from './queuemanagement/DataAccess/QueueEntity';

@Module({
  imports: [accesscodemanagementModule,VisitormanagementModule, loginModule, csrfModule, TypeOrmModule.forRoot(
    {
      type: "mysql",
      host: "localhost",
      port: 5000,
      username: "root",
      password: "password",
      database: "database",                
      entities: [
          VisitorEntity,
          AccessCodeEntity,
          QueueEntity
      ],
      synchronize: true
    }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
