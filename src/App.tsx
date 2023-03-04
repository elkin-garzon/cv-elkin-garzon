import { useState, useEffect } from 'react';
import data from './data/data.json';
import './styles/general.scss'
// COMPONENTS
import { UserData } from './components/UserData';
import { StydyData } from './components/StydyData'

//MODELS
import { Information } from './models/information';
import { Study } from './models/study';


function App() {

    const [informaion, setInformaion] = useState<Information>(new Information());
    const [studies, setStudies] = useState<Study[]>([])

    useEffect(() => {
        setInformaion(data.information)
        setStudies(data.studies)
    }, []);

    return (
        <div className="page">
            <UserData dataUser={informaion} />
            <StydyData studies={studies} />
        </div>
    );
}

export default App;
