import { useState, useEffect } from 'react';
import data from './data/data.json';
import './styles/general.scss'
// COMPONENTS
import { UserData } from './components/UserData';
import { StydyData } from './components/StydyData'

//MODELS
import { Information } from './models/information';
import { Study } from './models/study';
import { ExperienceData } from './components/ExperienceData';
import { Experience } from './models/experience';
import { KnowledgesData } from './components/KnowledgesData';
import { Knowledges } from './models/knowledges';


function App() {

    const [informaion, setInformaion] = useState<Information>(new Information());
    const [studies, setStudies] = useState<Study[]>([])
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [knowledge, setKnowledge] = useState<Knowledges[]>([])


    useEffect(() => {
        setInformaion(data.information)
        setStudies(data.studies)
        setExperiences(data.experiences)
        setKnowledge(data.knowledges)
    }, []);


    return (
        <div className="page">
            <UserData dataUser={informaion} />
            <StydyData studies={studies} />
            <ExperienceData experiences={experiences} />
            <KnowledgesData Knowledges={knowledge}/>
        </div>
    );
}

export default App;
