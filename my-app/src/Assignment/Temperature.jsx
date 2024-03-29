import React, { useState } from 'react';
function Temperature() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    const convertToFahrenheit = () => {
        const fTemp = (parseFloat(celsius) * 9/5) + 32; 
        setFahrenheit(fTemp.toFixed(2)); 
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setCelsius(value); 
    };
    return (
        <>
            <h1>TEMPERATURE CONVERTOR</h1>
            <input type="number" value={celsius} onChange={handleInputChange} />
            <button onClick={convertToFahrenheit}>Convert to F</button>
            <p>{fahrenheit} °F</p> 
        </>
    );
}
export default Temperature;