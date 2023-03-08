import { Knowledges } from "../models/knowledges"
import { KnowledgesDetail } from "./KnowledgesDetail"
import '../styles/knowledgesDetail.scss';
interface KnowledgesProps {
    Knowledges: Knowledges[]
}

export function KnowledgesData(
    { Knowledges }: KnowledgesProps
) {
    if (Knowledges.length === 0) {
        return (
            <div className="contentSection KnowledgesData">
                <h2>sin datos</h2>
            </div>
        )
    }

    return (
        <div className="contentSection">
            <section className="sub-content KnowledgesData">
                <section className="timeline">
                    <section className="text-center">
                        <h2>Conocimientos</h2>
                    </section>
                    <div className="row">
                        {Knowledges.map((knowledg: Knowledges) => (
                            <KnowledgesDetail key={knowledg.id} Knowledg={knowledg} />
                        ))}
                    </div>
                </section>
            </section>
        </div>
    )
}