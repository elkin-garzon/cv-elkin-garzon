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
            <div className="contentSection">
                <h2>sin experiencias</h2>
            </div>
        )
    }
    return (
        <div className="contentSection">
            <section className="sub-content ExperienceData">
                <section className="timeline white">
                    <section className="text-center">
                        <h2>Experiencia laboral</h2>
                    </section>
                    <div className="row">
                        {experiences.map((experience: Experience, i:number) => (
                            <Experiencedetail key={experience.id} experience={experience} position={i}/>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    )
}