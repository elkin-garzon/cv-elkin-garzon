import { StudyInterface } from "../interfaces/study.interface";

export class Study implements StudyInterface{
    id!: number;
    university!: string;
    title!: string;
    status!: boolean;
    dateEnd!: string;
    
}