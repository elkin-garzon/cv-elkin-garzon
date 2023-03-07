import { Experience } from "../models/experience"
import { Experiencedetail } from "./Experiencedetail"

interface ExperiencesProps {
	experiences: Experience[]
}

export function ExperienceData(
	{ experiences }: ExperiencesProps
) {

	if (experiences.length === 0) {
        return (
            <div className="ExperienceData contentSection">
                <h2>sin experiencias</h2>
            </div>
        )
    }
	return (
		<div className="ExperienceData contentSection">
            <h2>Experiencia laboral</h2>
            <div>
			{experiences.map((experience: Experience) => (
                    <Experiencedetail key={experience.id} experience={experience} />
                ))}
			
            </div>
        </div>
	)
}