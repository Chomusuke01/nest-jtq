import { QueueDTO } from "src/queuemanagement/dto/QueueDTO";
import { visitorDTO } from "src/visitormanagement/dto/visitor.dto";

export class AccessCodeDTO{
    visitor: visitorDTO;
    queue: QueueDTO;
    accessCode: AccessCodeDTO;
}