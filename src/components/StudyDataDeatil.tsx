import { Study } from "../models/study";
import { ClassNames } from "../utils/classes";
interface StudiesProps {
    study: Study,
    position:number
}

export function StudyDataDeatil(
    { study, position }: StudiesProps
) {
    return (
        <div className="col-md-12">
            <div className={ClassNames('timeline-panel', position%2 ? 'right' : '')}>
                <h3>{study.university}</h3>
                <p>{study.title}</p>
                <p>{study.dateEnd}</p>
                <p>{study.status ? 'finalizado' : 'pendinte de grado'}</p>
            </div>
        </div>

    )
}