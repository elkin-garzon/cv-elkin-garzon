import { Study } from "../models/study";
interface StudiesProps {
    study: Study
}

export function StudyDataDeatil(
    { study }: StudiesProps
) {
    console.log(study)
    return (
        <article className="StudyDataDeatil">
            <h3>{study.university}</h3>
            <p>{study.title}</p>
            <p>{study.dateEnd}</p>
            <p>{ study.status?'finalizado':'pendinte de grado'}</p>

        </article>
    )
}