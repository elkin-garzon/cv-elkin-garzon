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


function App() {

    const [informaion, setInformaion] = useState<Information>(new Information());
    const [studies, setStudies] = useState<Study[]>([])
    const [experiences, setExperiences] = useState<Experience[]>([])

    useEffect(() => {
        setInformaion(data.information)
        setStudies(data.studies)
        setExperiences(data.experiences)
    }, []);


    return (
        <div className="page">
            <UserData dataUser={informaion} />
            <StydyData studies={studies} />
            <ExperienceData  experiences={experiences}/>
        </div>
    );
}

export default App;
