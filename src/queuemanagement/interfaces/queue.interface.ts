export interface IQueue {

    getName():string;
    setName(name:string):void;
    getLogo():string;
    setLogo(logo:string):void;
    getCurrentNumber():string;
    setCurrentNumber(currentNumber:string):void;
    getAttentionTime():number;
    setAttentionTime(attentionTime:number):void;
    getMinAttentionTime():number;
    setMinAttentionTime(minAttentionTime:number):void;
    getActive():boolean;
    setActive(active:boolean):void;
    getCustomers():number;
    setCustomers(customers:number):void;
}
