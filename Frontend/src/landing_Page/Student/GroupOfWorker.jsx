import React from 'react';
// import Carpenter from './Carpenter';
// import Electrician from './Electrician';
// import Plumber from './Plumber';
import ProblemFormPage from './Form/ProblemFormPage';
import Worker from './Worker';

function GroupOfWorker() {
    return ( 
        <div className="container mt-4 p-3 min-background" style={{background:"white"}}>
            <div className="row">
                <Worker image="media/images/Plumber.jpg" work="Plumber"/>
                <Worker image="media/images/Electrician.jpg" work="Electrician"/>
                <Worker image="media/images/CarPenter.jpg" work="CarPenter"/>
                
            </div>
        </div>
     );
}

export default GroupOfWorker;