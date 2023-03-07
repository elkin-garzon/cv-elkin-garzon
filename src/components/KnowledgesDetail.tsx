import { Knowledges } from "../models/knowledges"

interface KnowledgesProps {
    Knowledg: Knowledges
}
export function KnowledgesDetail(
    { Knowledg }: KnowledgesProps
) {
    console.log(Knowledg)
    return (
        <div className="KnowledgesDetail">
            <p>
                {Knowledg.technology} - 
                <span> {Knowledg.percentage}</span>
            </p>
        </div>
    )
}