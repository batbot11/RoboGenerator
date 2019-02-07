import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 150,
            enable: true,
            value_area: 800
        }
    }
}

const App = () => {
    return(
        <div> 
             <Particles 
                params={particleOpt} className="particles"  />
            <Dashboard/>
       </div>
    );
}

export default App;