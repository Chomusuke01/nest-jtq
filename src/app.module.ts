import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitormanagementModule } from './visitormanagement/visitormanagement.module';


@Module({
  imports: [VisitormanagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
