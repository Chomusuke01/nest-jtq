import { IsDefined, IsEmail, IsPhoneNumber } from "class-validator";
import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";
import { IVisitor } from "../interfaces/visitor.interface";
import { VisitorEntityTransformer } from "./visitorEntityTransformer";

@Entity("visitor")
export class VisitorEntity implements IVisitor {


    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail() 
    @IsDefined() 
    @Column()
    username: string;
    
    @Column()
    @IsDefined()
    name: string;
    
    @IsPhoneNumber()
    @IsDefined()
    @Column()
    phoneNumber: string;
    
    @Column()
    @IsDefined()
    password: string;
    
    @Column()
    @IsDefined()
    acceptedCommercial: boolean;
    
    @Column()
    @IsDefined()
    acceptedTerms: boolean;
    
    @Column()
    @IsDefined()
    userType: boolean;

    getId():number{
        return this.id;
    }

    setId(id:number){
        this.id = id;
    }

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