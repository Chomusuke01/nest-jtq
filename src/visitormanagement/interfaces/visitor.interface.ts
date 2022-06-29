export interface IVisitor {
    getUserName():string;
    setUserName(userName:string):void;
    getName():string;
    setName(name:string):void;
    getPhoneNumber():string;
    setPhoneNumber(phoneNumber:string):void;
    getPassword():string;
    setPassword(password:string):void;
    getAcceptedCommercial():boolean;
	setAcceptedCommercial(acceptedCommercial:boolean):void;
	getAcceptedTerms():boolean;
	setAcceptedTerms(acceptedTerms:boolean):void;
	getUserType():boolean;
	setUserType(userType:boolean):void;
}