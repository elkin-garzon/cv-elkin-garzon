import { InformationInterface } from "../interfaces/Informaion.interface";

export class Information implements InformationInterface {
    maskPhone!: string;
    maskMail!: string;
    name!: string;
    phone!: string;
    mail!: string;
    birthDate!: string;
    photo!: string;
    text!:string
}
