import { Min, Max } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VisitorEntity } from "src/visitormanagement/DataAccess/visitorEntity";
import { QueueEntity } from "src/queuemanagement/DataAccess/QueueEntity";


@Entity("accessCode")
export class AccessCodeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Min(2)
    @Max(5)
    @Column()
    ticketNumber: string;

    @Column()
    creationTime: number;

    @Column()
    startTime: number;

    @Column()
    endTime: number;

    @Column()
    visitor_id: number;

    @OneToOne(() => VisitorEntity)
    @JoinColumn({ name : "visitor_id" })
    visitor: VisitorEntity;

    @Column()
    queue_id: number;


    @OneToOne(() => QueueEntity)
    @JoinColumn({ name : "queue_id" })
    queue: QueueEntity;

}