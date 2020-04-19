import React, { useState, useEffect } from 'react';
import Summary from "./Summary";
import Countries from "./Countries";
import "./App.css";

const App = () => {

  const [global, setGlobal] = useState([]);
  const [countries, setCountries] = useState([]);
  const [currentdate, setCurrentdate] = useState(null);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`https://api.covid19api.com/summary`);
    const data = await response.json();
    setGlobal(data.Global);
    setCountries(data.Countries);
    setCurrentdate(data.Date);
    console.log(data);
  }
  


  return (
    <div className="App">
      <Summary 
      summary = {global}
      Currentdate = {currentdate}
      Countries = {countries}
       />
      <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>New Confirmed</th>
              <th>Total Confirmed</th>
              <th>New Deaths</th>
              <th>Total Deaths</th>
              <th>New Recovered</th>
              <th>Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(country =>(
              <Countries 
              countries = {country}
              key = {country.Country}
              />
            ))}
          </tbody>
      </table>
    
    </div>

  )
}

export default App;
