import { ExperienceInterface } from "../interfaces/experience.interface";

export class Experience implements ExperienceInterface {
    id!: number;
    enterprice!: string;
    position!: string;
    dateInit!: string;
    dateEnd!: string;
    functions!: string;

}
