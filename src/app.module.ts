import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitormanagementModule } from './visitormanagement/visitormanagement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from './visitormanagement/DataAccess/visitorEntity'


@Module({
  imports: [VisitormanagementModule, TypeOrmModule.forRoot(
    {
      type: "mysql",
      host: "localhost",
      port: 5000,
      username: "root",
      password: "password",
      database: "database",                
      entities: [
          VisitorEntity
      ],
      synchronize: true
    }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
