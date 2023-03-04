import { Study } from "../models/study";
import '../styles/StydyData.scss';
import { StudyDataDeatil } from "./StudyDataDeatil";

interface StudiesProps {
    studies: Study[]
}

export function StydyData(
    { studies }: StudiesProps
) {
    if (studies.length === 0) {
        return (
            <div className="StydyData contentSection">
                <h2>sin estudios</h2>
            </div>
        )
    }

    return (
        <div className="StydyData contentSection">
            <h2>estudio</h2>
            <div>
                {studies.map((study: Study) => (
                    <StudyDataDeatil key={study.id} study={study} />
                ))}
            </div>
        </div>
    )
}