import { Pageable } from "../../Paginator/Pageable";

export class QueueSearchCriteriaTo{
    name: string;
    logo: string;
    currentNumber: string;
    attentionTime: number;
    minAttentionTime: number;
    active: boolean;
    customers: number;
    pageable: Pageable;

    // constructor(){
    //     this.name ="empanadaQueue";
    //     this.logo = "";
    //     this.currentNumber = "";
    //     this.attentionTime = undefined;
    //     this.minAttentionTime = undefined;
    //     this.active = undefined;
    //     this.customers = undefined;
    //     this.pageable = new Pageable();
    // }

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