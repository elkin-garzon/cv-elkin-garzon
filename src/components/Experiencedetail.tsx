import { Experience } from "../models/experience"

interface ExperienceProps {
    experience: Experience
}

export function Experiencedetail(
    { experience }: ExperienceProps
) {
    console.log(experience)
    return (
        <section className="Experiencedetail">
            <h3>{experience.enterprice}</h3>
            <p>{experience.position}</p>
            <p>{experience.dateInit} - {experience.dateEnd}</p>
            <p>{experience.functions}</p>
        </section>
    )
}