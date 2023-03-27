import React from "react";
import * as Yup from "yup";

//import "@material-tailwind/react/tailwind.css";




// tailwind components
import { Button } from "@material-tailwind/react";

import {Checkbox} from "@material-tailwind/react/";
import TextInput from './TextInput';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useFormik } from 'formik';
import {Link} from 'react-router-dom';

//import TextInput from "./components/TextInput";

const FleetSizeDataEntry = () => {

  const [fisrtformvalues, setFisrtformvalues] = useState(false);
  var firstformvaluesVar; 
  var formik2valuesVar; 
  var senario1FormikVar;
  var senario2FormikVar;

    const [checked, setChecked] = useState(false);
    const [checkedNo, setCheckedNo] = useState(false);
    const [checkedUrban, setCheckedUrban] = useState(false);
    const [checkedRural, setCheckedRural] = useState(false);
    const [checkedPUrban, setCheckedPUrban] = useState(false);
    const [checkedRes, setCheckedRes] = useState(false);


    const [showContent, setShowContent] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      setShowContent(event.target.value === 'yes');
    };


//three conditional 
    const [showContentBis, setShowContentBis] = useState(false);
    const [selectedOptionBis, setSelectedOptionBis] = useState('');
  
    const handleOptionChangeBis = (event) => {
      setSelectedOptionBis(event.target.value);
      setShowContentBis(event.target.value === 'yes');
    };


    
  // perform some command
  const _onSave = (values) => {
    console.log(values);
  };



  const averageOperationalSpeed =(values)=>{
    var calcule= (values.Sth*values.L*60)/((values.L*60)+(values.Ns*values.Ds*values.Sth));
    return calcule.toFixed(2);
  }

  const estimatedPpulationInTheArea = (values)=>{
    var calcule = values.PTU-values.MSc;
    return calcule;

  }



  const formik = useFormik({
    initialValues: {
      L: '',
      DP: '',
      Ns: '',
      Ds: '',
      Sth: '',
      S: '',
      T: '',
      C: '',
      A: '',
      TO: '',
    },
    onSubmit: values => {
      alert(JSON.stringify( averageOperationalSpeed(values), null, 2));
      setFisrtformvalues(values);
      firstformvaluesVar= values;
      //setFisrtformvalues(values);
      console.log(firstformvaluesVar);
     

    },
  });

  const formik2 = useFormik({
    initialValues: {
        PTU: '',
        MSc: '',
        MSb: '',
        MSp: '',
      
        NTp: '',
        O: '',
        WD: '',
   
    },
    onSubmit: (values )=> {
      alert(JSON.stringify(values, null, 2));
      formik2valuesVar= values;
      console.log("from",senario1FormikVar)
      let obj3 = {...formik2valuesVar,...fisrtformvalues}
      console.log(obj3);
      setFisrtformvalues(obj3);
     
      
    },
  });
  const Supplyformik = useFormik({
    initialValues: {
        O: '',
        Hph: '',
        WD: '',
        Fph: '',
      
        Foh: '',
     
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const senario1Formik= useFormik({
    initialValues: {
        SCph: '',
        SCoh: '',
      
     
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      senario1FormikVar= values;
      console.log("sen1",  senario1FormikVar)
      console.log("from",fisrtformvalues)
      let obj3 = {...senario1FormikVar,...fisrtformvalues}
      console.log(obj3);
      setFisrtformvalues(obj3);
    },
  });

  const senario2Formik= useFormik({
    initialValues: {
        Hph: '',
        Hoh: '',
        Prph: '',
        Proh: '',
      
     
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
       console.log(senario2FormikVar.O - values.Hph)
       senario2FormikVar= values;
      console.log("sen2",  senario2FormikVar)
      console.log("from",fisrtformvalues)
      let obj3 = {...senario2FormikVar,...fisrtformvalues}
      console.log(obj3);
      setFisrtformvalues(obj3);


    },
  });



  return (
    <div className="p-8">
        <p className="w-100  text-center">
        In this tab, you will fill in the necessary data for the calculation of the fleet required to meet the service to be proposed.
First, you will be asked to fill in the general parameters about the service to be offered (for example: the size of the route, the number of stops, the average speed, the capacity of the vehicle, etc). After doing this, you must decide the way you want to calculate the fleet size either via demand (in yellow - where the service will complement the existing transport offers and data on routes and users are available) or via supply (in green  where the service will meet new demands and new audiences, and pre-existing data are not available).

           </p>
           <br/>
            
             {/* First form  */}

           <div class="relative overflow-x-auto">
           <form onSubmit={formik.handleSubmit}>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    General parameters
                </th>
                <th scope="col" class="px-6 py-3">
                    Variables
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Fixed route
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Average ONE-WAY route length (kms or miles)
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="L">L</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="L"
         name="L"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.L}
       />
                </td>
            </tr>


            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Depot distance from the operating site (kms or miles)                </th>
                <td class="px-6 py-4">
                <label htmlFor="DP">DP</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="DP"
         name="DP"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.DP}
       />
                </td>
                
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Number of shuttle's stops/stations
                </th>
                <td class="px-6 py-4">
                <label htmlFor="Ns">Ns</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="Ns"
         name="Ns"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Ns}
       />
                </td>
                
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Average duration of a stop (min)
                </th>
                <td class="px-6 py-4">
                <label htmlFor="Ds">Ds</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="Ds"
         name="Ds"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Ds}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Average expected speed (km/h or mph)                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="Sth">Sth</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="Sth"
         name="Sth"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Sth}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Average operational speed (km/h or mph)
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="S">S</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="S"
         name="S"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.S}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Average layover time (min)
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="T">T</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="T"
         name="T"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.T}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Shuttle's capacity (max. number of passengers)
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="C">C</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="C"
         name="C"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.C}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Shuttle's battery autonomy (total IN MINUTES  to run on a single charge)                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="A">A</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="A"
         name="A"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.A}
       />
                </td>
            </tr> <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Shuttle's charging time (number of MINUTES to recharge)
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="TO">TO</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="TO"
         name="TO"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.TO}
       />
                </td>
            </tr>
        </tbody>
    </table>
    <button type="submit">Submit</button>
    </form>
</div>





<div>
      <div>
        <input
          type="radio"
          id="yes"
          name="showContent"
          value="yes"
          checked={selectedOption === 'yes'}
          onChange={handleOptionChange}
        />
        <label htmlFor="yes">Via demand: the service is designed to complement existing collective transport services</label>
      </div>
      <div>
        <input
          type="radio"
          id="no"
          name="showContent"
          value="no"
          checked={selectedOption === 'no'}
          onChange={handleOptionChange}
        />
        <label htmlFor="no">Via supply: the service is designed to foster new demands for collective transport services</label>
      </div>
      {showContent ? ( 
        
        //second form via demand part 

<div className="relative overflow-x-auto">
           <form onSubmit={formik2.handleSubmit}>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-yellow-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Overall DEMAND side parameters
                </th>
                <th scope="col" class="px-6 py-3">
                    Variables
                </th>
                
                <th scope="col" class="px-6 py-3">
                Fill in data
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Estimated % of public transport users in the city/area
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="PTU">PTU</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="PTU"
         name="PTU"
         type="text"
         onChange={formik2.handleChange}
         value={formik2.values.PTU}
       />
                </td>
            </tr>


            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Estimated % of modal shifters: cars to collective transport             </th>
                <td class="px-6 py-4">
                <label htmlFor="MSc">MSc</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="MSc"
         name="MSc"
         type="text"
         onChange={formik2.handleChange}
         value={formik2.values.MSc}
       />
                </td>
                
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Estimated % of modal shifters: bicycles to collective transport
                </th>
                <td class="px-6 py-4">
                <label htmlFor="MSb">MSb</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="MSb"
         name="MSb"
         type="text"
         onChange={formik2.handleChange}
         value={formik2.values.MSb}
       />
                </td>
                
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Estimated % of modal shifters: pedestrians to collective transport
                </th>
                <td class="px-6 py-4">
                <label htmlFor="MSp">MSp</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="MSp"
         name="MSp"
         type="text"
         onChange={formik2.handleChange}
         value={formik2.values.MSp}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Estimated population in the area            </th>
                
                <td class="px-6 py-4">
                P
                </td>
                <td class="px-6 py-4 bg-blue-100">
                Result
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Estimated % of people in the area who do not travel
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="NTp">NTp</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="NTp"
         name="NTp"
         type="text"
         onChange={formik2.handleChange}
         value={formik2.values.NTp}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Operating hours of the service (number of HOURS per day)
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="O">O</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="O"
         name="O"
         type="text"
         onChange={formik2.handleChange}
         value={formik2.values.O}
       />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Number of working days per month
                </th>
                
                <td class="px-6 py-4">
                <label htmlFor="WD">WD</label>
                </td>
                <td class="px-6 py-4">
                <input
         id="WD"
         name="WD"
         type="text"
         onChange={formik2.handleChange}
         value={formik2.values.WD}
       />
                </td>
            </tr>
          
        </tbody>
    </table>
    <button type="submit">Submit2</button>

    </form>


    <div>
      <div>
        <input
          type="radio"
          id="yes"
          name="showContent"
          value="yes"
          checked={selectedOptionBis === 'yes'}
          onChange={handleOptionChangeBis}
        />
        <label htmlFor="yes">Data concerning number of passengers per hour are known (for both peak and off-peak hours)</label>
      </div>
      <div>
        <input
          type="radio"
          id="no"
          name="showContent"
          value="no"
          checked={selectedOptionBis === 'no'}
          onChange={handleOptionChangeBis}
        />
        <label htmlFor="no">Data concerning the percentage of passengers for peak and off-peak hours are known</label>
      </div>
      <div>
        <input
          type="radio"
          id="maybe"
          name="showContent"
          value="maybe"
          checked={selectedOptionBis === 'maybe'}
          onChange={handleOptionChangeBis}
        />
        <label htmlFor="maybe">Data concerning peak and off-peak hours of service are unknown</label>
      </div>
      {showContentBis ? (

        // Senario 1 
        <div class="relative overflow-x-auto">
        <form onSubmit={senario1Formik.handleSubmit}>
 <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
     <thead class="text-xs text-gray-700 uppercase bg-yellow-200 dark:bg-gray-700 dark:text-gray-400">
         <tr>
             <th scope="col" class="px-6 py-3">
             Demand-side: Scenario 1
             </th>
             <th scope="col" class="px-6 py-3">
                 Variables
             </th>
             
             <th scope="col" class="px-6 py-3">
             Fill in data
             </th>
         </tr>
     </thead>
     <tbody>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of passengers expected per hour for peak hours
             </th>
             
             <td class="px-6 py-4">
             <label htmlFor="SCph">SCph</label>
             </td>
             <td class="px-6 py-4">
             <input
      id="SCph"
      name="SCph"
      type="text"
      onChange={senario1Formik.handleChange}
      value={senario1Formik.values.SCph}
    />
             </td>
         </tr>

         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of passengers expected per hour for off-peak hours
             </th>
             
             <td class="px-6 py-4">
             <label htmlFor="SCoh">SCoh</label>
             </td>
             <td class="px-6 py-4">
             <input
      id="SCoh"
      name="SCoh"
      type="text"
      onChange={senario1Formik.handleChange}
      value={senario1Formik.values.SCoh}
    />
             </td>
         </tr>
        
        
       
     </tbody>
 </table>
 <button type="submit">Submit2</button>
 </form>
</div>
      ) : selectedOptionBis === 'no' ? (
         // Senario 2
         <div class="relative overflow-x-auto">
         <form onSubmit={senario2Formik.handleSubmit}>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-yellow-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-3">
              Demand-side: Scenario 2
              </th>
              <th scope="col" class="px-6 py-3">
                  Variables
              </th>
              
              <th scope="col" class="px-6 py-3">
              Fill in data
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Number of HOURS considered as peak hours              </th>
              
              <td class="px-6 py-4">
              <label htmlFor="Hph">Hph</label>
              </td>
              <td class="px-6 py-4">
              <input
       id="Hph"
       name="Hph"
       type="text"
       onChange={senario2Formik.handleChange}
       value={senario2Formik.values.Hph}
     />
              </td>
          </tr>
 
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Number of HOURS considered as off-peak hours              </th>
              
              <td class="px-6 py-4">
              <label htmlFor="Hoh">Hoh</label>
              </td>
              <td class="px-6 py-4">
              <input
       id="Hoh"
       name="Hoh"
       type="text"
       onChange={senario2Formik.handleChange}
       value={senario2Formik.values.Hoh}
     />
              </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Number of HOURS considered as off-peak hours              </th>
              
              <td class="px-6 py-4">
              <label htmlFor="Hoh">Hoh</label>
              </td>
              <td class="px-6 py-4">
              <input
       id="Hoh"
       name="Hoh"
       type="text"
       onChange={senario2Formik.handleChange}
       value={senario2Formik.values.Hoh}
     />
              </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Average % of passengers expected during peak hours             </th>
              
              <td class="px-6 py-4">
              <label htmlFor="Hoh">Prph</label>
              </td>
              <td class="px-6 py-4">
              <input
       id="Prph"
       name="Prph"
       type="text"
       onChange={senario2Formik.handleChange}
       value={senario2Formik.values.Prph}
     />
              </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Average % of passengers expected during off-peak hours             </th>
              
              <td class="px-6 py-4">
              <label htmlFor="Hoh">Proh</label>
              </td>
              <td class="px-6 py-4">
              <input
       id="Proh"
       name="Proh"
       type="text"
       onChange={senario2Formik.handleChange}
       value={senario2Formik.values.Proh}
     />
              </td>
          </tr>
         
        
      </tbody>
  </table>
  <button type="submit">Submit3</button>
  </form>
 </div>
      ) : (
        <div>
          <h1>Proceed to the next tab - Demand-side: Scenario 3</h1>
        </div>
      )}
    </div>
        




</div>
      ) : (
        // green form 
        <div class="relative overflow-x-auto">
        <form onSubmit={formik2.handleSubmit}>
 <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
     <thead class="text-xs text-gray-700 uppercase bg-green-200 dark:bg-gray-700 dark:text-gray-400">
         <tr>
             <th scope="col" class="px-6 py-3">
             Overall SUPPLY side parameters
             </th>
             <th scope="col" class="px-6 py-3">
                 Variables
             </th>
             
             <th scope="col" class="px-6 py-3">
             Fill in data
             </th>
         </tr>
     </thead>
     <tbody>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Operating hours of the service (number of hours per day)
             </th>
             
             <td class="px-6 py-4">
             <label htmlFor="O">O</label>
             </td>
             <td class="px-6 py-4">
             <input
      id="O"
      name="O"
      type="text"
      onChange={Supplyformik.handleChange}
      value={Supplyformik.values.O}
    />
             </td>
         </tr>


         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of those hours considered as peak hours           </th>
             <td class="px-6 py-4">
             <label htmlFor="Hph">Hph</label>
             </td>
             <td class="px-6 py-4">
             <input
      id="Hph"
      name="Hph"
      type="text"
      onChange={Supplyformik.handleChange}
      value={Supplyformik.values.Hph}
    />
             </td>
             
         </tr>
         <tr class="bg-white dark:bg-gray-800">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of those hours considered as off-peak hours
             </th>
             <td class="px-6 py-4">
             Oph
             </td>
             <td class="px-6 py-4">
             <td class="px-6 py-4 bg-blue-100">
             Result
             </td>
             </td>
             
         </tr>

         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of working days per month
             </th>
             <td class="px-6 py-4">
             <label htmlFor="WD">WD</label>
             </td>
             <td class="px-6 py-4">
             <input
      id="WD"
      name="WD"
      type="text"
      onChange={Supplyformik.handleChange}
      value={Supplyformik.values.WD}
    />
             </td>
         </tr>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Frequency for peak hours (e.g.: 1 shuttle every FPH minutes)         </th>
             
             <td class="px-6 py-4">
             <label htmlFor="Fph">Fph</label>
             </td>
             <td class="px-6 py-4">
             <input
      id="Fph"
      name="Fph"
      type="text"
      onChange={Supplyformik.handleChange}
      value={Supplyformik.values.Fph}
    />
             </td>
         </tr>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Frequency for off-peak hours (e.g.: 1 shuttle every FOH minutes)                </th>
             
             <td class="px-6 py-4">
             <label htmlFor="Foh">Foh</label>
             </td>
             <td class="px-6 py-4">
             <input
      id="Foh"
      name="Foh"
      type="text"
      onChange={Supplyformik.handleChange}
      value={Supplyformik.values.Foh}
    />
             </td>
         </tr>
        
       
     </tbody>
 </table>
 </form>
</div>
      )}

       <Link to='/FleetSizeDataResults'
      state ={{fisrtformvalues }}>Learn More</Link>
    </div>











    </div>
  );
};

export default FleetSizeDataEntry;
