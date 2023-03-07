import { KnowledgesInterface } from "../interfaces/knowledges.interface";


export class Knowledges implements KnowledgesInterface {
    id!: number;
    technology!: string;
    percentage!: number;

}
