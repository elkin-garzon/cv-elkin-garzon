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
            <div className="contentSection StydyData">
                <h2>sin estudios</h2>
            </div>
        )
    }

    return (
        <div className="contentSection">
            <section className="sub-content StydyData">
                <section className="timeline">
                    <section className="text-center">
                        <h2>estudios</h2>
                    </section>
                    <div className="row">
                        {studies.map((study: Study, i:number) => (
                            <StudyDataDeatil key={study.id} study={study} position={i} />
                        ))}
                    </div>
                </section>
            </section>
        </div>
    )
}