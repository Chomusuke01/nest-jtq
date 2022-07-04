import { Controller, Delete, Get, Param, ParseIntPipe, Post, Body } from "@nestjs/common";
import { QueueDTO } from "./dto/QueueDTO";
import { QueueManagementService } from "./queuemanagement.service";

@Controller('queuemanagement/v1')
export class QueueManagementController {

    constructor(private queueService: QueueManagementService){}

    @Get('/queue/:id')
    getQueue(@Param('id',new ParseIntPipe()) id: number): Promise<QueueDTO> {
        return this.queueService.findQueue(id);
    }

    @Post('/queue')
    saveQueue(@Body() queue): Promise<QueueDTO> {
        return this.queueService.saveQueue(queue);
    }
}