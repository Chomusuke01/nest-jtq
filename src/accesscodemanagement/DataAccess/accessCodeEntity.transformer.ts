import { AccessCodeDTO } from "../DTO/accesscode.dto";
import { AccessCodeETO } from "../DTO/accesscode.eto";
import { AccessCodeEntity } from "./accessCodeEntity";


export class AccessCodeEntityTransformer {

    public static entityToETO (accessCodeEntity: AccessCodeEntity): AccessCodeETO{
        
        let eto = new AccessCodeETO ();
        eto.creationTime = accessCodeEntity.creationTime;
        eto.endTime = accessCodeEntity.endTime;
        eto.startTime = accessCodeEntity.startTime;
        eto.queue_id = accessCodeEntity.queue_id;
        eto.visitor_id = accessCodeEntity.visitor_id;
        eto.ticketNumber = accessCodeEntity.ticketNumber;
        eto.id = accessCodeEntity.id;

        return eto;
    }

    
}