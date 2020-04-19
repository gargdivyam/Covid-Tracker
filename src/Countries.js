import React from "react";

const Countries = ({countries}) =>{
    return (
        
            <tr className="tablerow">
               <td>{countries.Country}</td>
               <td>{countries.NewConfirmed}</td>
               <td>{countries.TotalConfirmed}</td>
               <td>{countries.NewDeaths}</td>
               <td>{countries.TotalDeaths}</td>
               <td>{countries.NewRecovered}</td>
               <td>{countries.TotalRecovered}</td>
            </tr>
    )
};

export default Countries;