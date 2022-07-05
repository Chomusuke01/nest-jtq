import { Pageable } from "src/Paginator/Pageable";

export class AccessCodeSearchCriteriaTo {
    ticketNumber: string;
    creationTime: number;
    startTime: number;
    endTime : number;
    visitorId : number;
    queueId: number;
    pageable: Pageable;

    getTicketNumber(): string {
        return this.ticketNumber;
    }

    setTicketNumber(ticketNumber: string): void {
        this.ticketNumber = ticketNumber;
    }

    getCreationTime(): number {
        return this.creationTime;
    }

    setCreationTime(creationTime: number): void {
        this.creationTime = creationTime;
    }

    getStartTime(): number {
        return this.startTime;
    }

    setStartTime(startTime: number): void {
        this.startTime = startTime;
    }

    getEndTime(): number {
        return this.endTime;
    }

    setEndTime(endTime: number): void {
        this.endTime = endTime;
    }

    getVisitorId(): number {
        return this.visitorId;
    }

    setVisitorId(visitorId: number): void{
        this.visitorId = visitorId;
    }

    getQueueId(): number {
        return this.queueId;
    }

    setQueueId(queueId: number): void {
        this.queueId = queueId;
    }

    setPageable(pageable: Pageable): void{
        this.pageable = pageable;
    }

    getPageable(): Pageable{
        return this.pageable;
    }
}