import { Experience } from "../models/experience"
import { ClassNames } from "../utils/classes"

interface ExperienceProps {
    experience: Experience,
    position: number
}

export function Experiencedetail(
    { experience, position }: ExperienceProps
) {
    return (
        <div className="col-md-12">
            <div className={ClassNames('timeline-panel', position % 2 ? 'right' : '')}>
                <h3>{experience.enterprice}</h3>
                <p>{experience.position}</p>
                <p>{experience.dateInit} - {experience.dateEnd}</p>
                <p>{experience.functions}</p>
            </div>
        </div>
    )
}