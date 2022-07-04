import { Controller, Delete, Get, Param, ParseIntPipe, Post, Body } from "@nestjs/common";
import { QueueDTO } from "./dto/QueueDTO";
import { QueueManagementService } from "./queuemanagement.service";
import { Page } from "../Paginator/Page";
import { QueueSearchCriteriaTo } from "./dto/QueueSearchCriteriaTo"

@Controller('queuemanagement/v1')
export class QueueManagementController {

    constructor(private queueService: QueueManagementService){}

    @Get('/queue/:id')
    getQueue(@Param('id',new ParseIntPipe()) id: number): Promise<QueueDTO> {
        return this.queueService.findQueue(id);
    }

    @Delete('/queue/:id')
    deleteQueue(@Param('id',new ParseIntPipe()) id: number): Promise<boolean> {
        return this.queueService.deleteQueue(id);
    }

    @Post('/queue')
    saveQueue(@Body() queue): Promise<QueueDTO> {
        console.log(queue);
        return this.queueService.saveQueue(queue);
    }

    @Post('/queue/search')
    findQueues(@Body() criteria: QueueSearchCriteriaTo): Promise<Page> {
        return this.queueService.findQueues(criteria);
    }
}