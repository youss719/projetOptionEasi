import React,  { useState }  from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function ForthPage() {
  
  
  return (
    <Formik
      initialValues={{
        
      }}
     
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
     {({ values }) => (
        <Form style={{padding: '20px'}}>
         <h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>3. 3. TCO Comparision - Results</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}}><strong>The TCO calculation provides a comparative calculation of the total investiments, operation costs and foreseen revenues for implemeting a service with autonomous shuttles for collective transport.
</strong><br></br><br></br>
In this tab, the main results are showed. Starting from the detailed results for the CAPEX for both the baseline vehicle as well as for the Autonomous Shuttle. In the sequence, detailed results are also shown for the OPEX for both the baseline and the shuttle. Next, the cost per passenger per kilometre and cost per vehicle per kilometre are showed for both types of vehicles</p>
          <br/>

          <table class=" text-sm text-left text-gray-500 dark:text-gray-400" >    
<thead>
</thead>
<tbody>

  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-grey p-1' >Qualitative summary of the service to be offered:</td>
    
  </tr>
  <tr>
    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">Autonomous shuttles will be offered a as a new public transport service in a Urban residentiel environment </td>
    
  </tr>
</tbody>

</table>
<br></br>

<h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>Capital Expenditures (CAPEX) comparative results</h3>
<br/>
<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>

<tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
<th className="p-2 text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400" > </th>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2'>Carsharing</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2' >Auonomous shuttle</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  rowSpan='2'>% Change</td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

    <td className="p-2 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"   >  CAPEX</td>
   
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  1. Feasibility study</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
            
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 2. Commissioning costs</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  3. Vehicle acquisition</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"> 4. Infrastructure works</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
               
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  5. Certificat° & standardizat°</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr><tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 6. Additional services</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                
                </td>
  </tr>

</tbody>

</table>
<br/>


<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>
<tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"  >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >             TOTAL CAPEX FOR THE FLEET</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>
<br/>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>
<tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" > TOTAL CAPEX FOR  A SINGLE VEHICLE</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>
<br/>

<h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>Annual Operation Expenditures (OPEX) comparative results</h3>
<br/>
<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>

<tr   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
<th className="p-2 text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400" > </th>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2'>Carsharing</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2' >Auonomous shuttle</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  rowSpan='2'>% Change</td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >

    <td className="p-2 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"   >  OPEX</td>
   
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  1. Personnel</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
            
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 2. Insurance</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  3. Taxes and Fees</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"> 4. Maintenance</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
               
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  5. Additional services</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr><tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 6. Fuel/Energy consumption</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 7. Cleaning</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 8. Advertising</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                
                </td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 9. Hidden costs</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                
                </td>
  </tr>

</tbody>

</table>
<br/>


<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>
<tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" > TOTAL OPEX FOR THE SERVICE</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>
<br/>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>
<tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" > TOTAL OPEX FOR A SINGLE VEHICLE</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>
<br/>
<h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>Annual Operation Expenditures (OPEX) comparative results</h3>
<br/>
<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>

<tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"  >
    <th className="p-2 text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400" > </th>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2'>Carsharing</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2' >Auonomous shuttle</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  rowSpan='2'>% Change</td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

    <td className="p-2 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"   >  Revenues</td>
   
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  1. Ticketing</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
            
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 2. Subsidies</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  3. Financing from companies</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"> 4. Advertising by 3rd parties</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
               
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  5. Data commercialization</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" ></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                 
                </td>
  </tr><tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" > 6. Others (specify)</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900"></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                
                </td>
  </tr>
  

</tbody>

</table>
<br/>


<br/>
<h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>TCO Comparison - overall results</h3>
<br/>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>
<tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <th > </th>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >Crashing</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >Autonomous shuttle</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >% Change</td>
  </tr>
  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" > COST per passenger/km</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>

<br/>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>

  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" > COST per vehicle/km</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>
<br/>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>

  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" > ONE-WAY COST per passenger</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>
<br/>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>

  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
   
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" > ONE-WAY COST per vehicle</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"  >SOMME(F16:G21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >SOMME(H16:I21)</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >-88%</td>
  </tr>
  
</tbody>
</table>
<Link to='/fifthpage'
      ><Button style={{ marginTop: "30px" }} className="mb-3">Next</Button></Link>
        </Form>
      )}
    </Formik>
  );
}

export default ForthPage;

     