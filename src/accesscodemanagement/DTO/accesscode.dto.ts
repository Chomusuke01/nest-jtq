import { QueueDTO } from "src/queuemanagement/dto/QueueDTO";
import { visitorDTO } from "src/visitormanagement/dto/visitor.dto";
import { AccessCodeETO } from "./accesscode.eto";

export class AccessCodeDTO{
    visitor: visitorDTO;
    queue: QueueDTO;
    accessCode: AccessCodeETO;
}