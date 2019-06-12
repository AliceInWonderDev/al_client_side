import React from 'react';
import TimeConverter from './TimeConverter';

function Forecast({ response }){
    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in the selected city is:</h2>
                    <p>
                        <h3> {response.temperature} F</h3>
                    </p>
                <h2>The Humidity is:</h2>
                    <p>
                        {response.humidity * 100} %
                    </p>
                <h2>You're consulting this on:</h2>
                    <p>
                        <TimeConverter 
                            response = {response}
                        />
                    </p>
            </div>
        </div>
    )
}

export default Forecast;