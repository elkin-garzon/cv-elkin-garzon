import { Knowledges } from "../models/knowledges"
import { KnowledgesDetail } from "./KnowledgesDetail"

interface KnowledgesProps {
    Knowledges: Knowledges[]
}

export function KnowledgesData(
    { Knowledges }: KnowledgesProps
) {
    if (Knowledges.length === 0) {
        return (
            <div className="contentSection ExperienceData">
                <h2>sin datos</h2>
            </div>
        )
    }

    return (
        <div className="contentSection KnowledgesData">
            <h2>Conocimientos</h2>
            <div className="ExperienceDetail">
                {Knowledges.map((knowledg: Knowledges) => (
                    <KnowledgesDetail key={knowledg.id} Knowledg={knowledg} />
                ))}
            </div>
        </div>
    )
}