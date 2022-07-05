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

    @Column({nullable:true})
    creationTime: string;

    @Column({nullable:true})
    startTime: string;

    @Column({nullable:true})
    endTime: string;

    @Column()
    visitor_id: number;

    @Column()
    queue_id: number;

}