import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitormanagementModule } from './visitormanagement/visitormanagement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from './visitormanagement/DataAccess/visitorEntity';
import { loginModule } from './login/login.module';
import { csrfModule } from './csrf/csrf.module';
import { QueuemanagementModule } from './queuemanagement/queuemanagement.module';
import { QueueEntity } from './queuemanagement/DataAccess/QueueEntity';

@Module({
  imports: [VisitormanagementModule, loginModule, csrfModule, QueuemanagementModule, TypeOrmModule.forRoot(
    {
      type: "mysql",
      host: "localhost",
      port: 5000,
      username: "root",
      password: "password",
      database: "database",                
      entities: [
          VisitorEntity,
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
