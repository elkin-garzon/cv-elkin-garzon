import { Knowledges } from "../models/knowledges"
import '../styles/knowledgesDetail.scss';

interface KnowledgesProps {
    Knowledg: Knowledges
}
export function KnowledgesDetail(
    { Knowledg }: KnowledgesProps
) {

    return (
        <div className="col-md-6">
            <div className="progress-wrap">
                <h3>
                    <span>{Knowledg.technology} </span>
                    <span>{Knowledg.percentage} %</span>
                </h3>
                <div>
                    <progress id="file" max="100" value={Knowledg.percentage} />
                </div>
            </div>
        </div>
    )
}