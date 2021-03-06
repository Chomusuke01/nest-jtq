import { IVisitor } from "../interfaces/visitor.interface";

export class visitorDTO implements IVisitor{
    id?: number;
    username: string;
    name: string;
    password: string;
    phoneNumber: string;
    acceptedCommercial: boolean;
    acceptedTerms: boolean;
    userType: boolean;

    getUserName(): string {
        return this.username;
    }

    setUserName(userName: string): void {
        this.username = userName;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getAcceptedCommercial(): boolean {
        return this.acceptedCommercial;
    }

    setAcceptedCommercial(acceptedCommercial: boolean): void {
        this.acceptedCommercial = acceptedCommercial;
    }

    getAcceptedTerms(): boolean {
        return this.acceptedTerms;
    }

    setAcceptedTerms(acceptedTerms: boolean): void {
        this.acceptedTerms = acceptedTerms;
    }

    getUserType(): boolean {
        return this.userType;
    }

    setUserType(userType: boolean): void {
        this.userType = userType;
    }
}