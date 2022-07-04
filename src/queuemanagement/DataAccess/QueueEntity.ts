import { Expose } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IQueue } from "../interfaces/queue.interface";

@Entity('Queue')
export class QueueEntity implements IQueue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    logo: string;

    @Column()
    currentNumber: string;

    @Column()
    attentionTime: number;

    @Column()
    minAttentionTime: number;

    @Column()
    active: boolean;

    @Column()
    customers: number;

    getId():number{
        return this.id;
    }

    setId(id:number){
        this.id = id;
    }

    getName(): string {   
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getLogo(): string {
        return this.logo;
    }
    setLogo(logo: string): void {
        this.logo = logo;
    }
    getCurrentNumber(): string {
        return this.currentNumber;
    }
    setCurrentNumber(currentNumber: string): void {
        this.currentNumber = currentNumber;
    }
    getAttentionTime(): number {
        return this.attentionTime;
    }
    setAttentionTime(attentionTime: number): void {
        this.attentionTime = attentionTime;
    }
    getMinAttentionTime(): number {
        return this.minAttentionTime;
    }
    setMinAttentionTime(minAttentionTime: number): void {
        this.minAttentionTime = minAttentionTime;
    }
    getActive(): boolean {
        return this.active;
    }
    setActive(active: boolean): void {
        this.active = active;
    }
    getCustomers(): number {
        return this.customers;
    }
    setCustomers(customers: number): void {
        this.customers = customers;
    }
}