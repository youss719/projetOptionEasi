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
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

//import TextInput from "./components/TextInput";

const FleetSizeDataResults = (props) => {
    const location = useLocation();
    const myData = location.state;
   console.log(myData)
  
   const Frequencyforpeakhourscalculation = (values)=>{
    var calcule = (60*values.C /values.SCph)
    return calcule;

  }

  const  Frequencyforoffpeakhourscalcuation = (values)=>{
    var calcule = (60*values.C /values.SCoh)
    return calcule;

  }

  const Numberofpotentialusersperday = (values) => {
    var calcul = ((values.PTU + values.MSu +values.MSb+ values.MSp)*(values.P)*(values.WD))*(0,8);
    return calcul
  }
  const   Fleetsizeforpeakhourscalculation  = (values) => {
    var calcul = Frequencyforoffpeakhourscalcuation(values)/Numberofpotentialusersperday(values);
    return calcul
  }
  const   Fleetsizeforoffpeakhourscalculation = (values) => {
    var calcul = Frequencyforoffpeakhourscalcuation(values)/Frequencyforoffpeakhourscalcuation(values);
    return calcul
  }
  const scenario1Daily = (values) => {
    var calcul =((values.O*60)*(values.L*2)/Numberofpotentialusersperday(values))+(values.DP*2);
    return calcul
  }
  const scenario1Monthly = (values) => {
    var calcul =scenario1Daily(values)*values.WD ;
    return calcul
  }

  const scenario1Yearly = (values) => {
    var calcul =scenario1Monthly(values)*12;
    return calcul
  }
  const Numberofpassengersforpeakhours = (values) => {
    var calcul =(values.Prph*Numberofpotentialusersperday(values)/values.Hph) ;
    return calcul
  }
  const Numberofpassengersforoffpeakhours = (values) => {
    var calcul =(values.Proh*Numberofpotentialusersperday(values)/values.Hoh) ;
    return calcul
  }
  const FrequencyforpeakhourscalculationSen2 = (values) => {
    var calcul =(60*values.C)/Numberofpassengersforpeakhours(values) ;
    return calcul
  }
  const FrequencyforpeakoffhourscalculationSen2 = (values) => {
    var calcul =(60*values.C)/Numberofpassengersforoffpeakhours(values);
    return calcul
  }
  const Numberofpassengersperhour = (values) => {
    var calcul =(60*values.C)/Numberofpotentialusersperday(values)/values.WD;
    
    return calcul
  }
  const Frequencyperhour = (values) => {
    var calcul =(60*values.C)/Numberofpassengersperhour(values);
    return calcul
  }
  const N7 = (values) => {
    var calcul =(120*values.L/values.S)+values.T+N6(values)
    return calcul
  }
  const N6 = (values) => {
    var calcul =(((120*values.L/values.S)+values.T)*values.To)/values.A
    return calcul
  }
   
  const Fleetsizefor1hourofservice = (values) => {
    var calcul =N7(values)/Frequencyperhour(values);
    return calcul
  }
  const NumberofpassengersforpeakhoursSupply = (values) => {
    var calcul =(60*values.L)/values.Fph ;
    return calcul
  }
  const NumberofpassengersforoffpeakhoursSupply = (values) => {
    var calcul =(60*values.L)/values.Foh ;
    return calcul
  }
  const Fleetsizeforpeakhourscalculationsupply = (values) => {
    var calcul =N7(values)/values.Fph;
    return calcul
  }
  const Fleetsizeforoffpeakhourscalculationsupply = (values) => {
    var calcul =N7(values)/values.Foh;
    return calcul
  }
  const Dailysupply = (values) => {
    var calcul =((values.O*60)*(values.D8*2)/N7(values))+(values.DP*2)
    return calcul
  }
  const Monthlysupply = (values) => {
    var calcul =Dailysupply(values)*values.WD
    return calcul
  }
  const Yearlysupply = (values) => {
    var calcul =Monthlysupply(values)*12;
    return calcul
  }

  

 




  return (
    <div classNameName="p-8">
       

 <p classNameName="w-100  text-center">
 This tab presents the results for the fleet calculation based on the inputs of the previous tab (via demand, presenting the fleet for one of the three possible scenarios) or via supply.
Besides the fleet size, some additional results are also presented here, such as: frequency and number of passengers for both peak and off-peak hours as well as the total maximum kilometers (per shuttle) per day, month, and year.

           </p>


           <div className="grid grid-cols-2 gap-2 justify-evenly  -mb-4 -mx-2">
    <div className=" mb-4 px-2 ">
      <div className="bg-yellow-100">

      Senario 1



      </div>


      <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
             <th scope="col" className="px-6 py-3">
             
             </th>
             <th scope="col" className="px-6 py-3">
                 
             </th>
             
             <th scope="col" className="px-6 py-3">
         
             </th>
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Frequency for peak hours calculation:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             {Frequencyforpeakhourscalculation(myData)}
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             minutes
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Frequency for off-peak hours calcuation:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             minutes
             </td>
         </tr>
        
        
       
     </tbody>
 </table>

 <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
             <th scope="col" className="px-6 py-3">
             
             </th>
             <th scope="col" className="px-6 py-3">
                 
             </th>
             
             <th scope="col" className="px-6 py-3">
         
             </th>
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Fleet size for peak hours calculation:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             shuttles
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Fleet size for off-peak hours calculation:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             shuttles
             </td>
         </tr>
        
        
       
     </tbody>
 </table>


 <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         
      <th colspan="3" className="px-6 py-3">Maximum total of kilometers per shuttle</th>
    
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Daily
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             Kms
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
Monthly             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             Kms
             </td>
         </tr>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
Yearly            </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             Kms
             </td>
         </tr>
        
        
       
     </tbody>
 </table>

 <table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
            
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             TOTAL FLEET SIZE*:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             Shuttles
             </td>
         </tr>

         
        
        
       
     </tbody>
 </table>

 


    </div>
  <div className=" mb-4 px-2">
    <div className="bg-yellow-100">

Senario 2



</div>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
            
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of potential users per day:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             potential users
             </td>
         </tr>
       
     </tbody>
 </table>

 <table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
            
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of passengers for peak hours:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
              users/hour
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of passengers for off-peak hours:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             users/hour
             </td>
         </tr>
       
     </tbody>
 </table>

 <table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
            
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Frequency for peak hours calculation:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             minutes
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Frequency for off-peak hours calcuation:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             minutes
             </td>
         </tr>
       
     </tbody>
 </table>


 <table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-2 pr-8">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
            
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-white">
             Fleet size for peak hours when average % of passengers 
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             shuttles
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap break-words dark:text-white">
             Fleet size for off-peak hours when average % of passengers
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             shuttles
             </td>
         </tr>
       
     </tbody>
 </table>
 <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         
      <th colspan="3" className="px-6 py-3">Maximum total of kilometers per shuttle</th>
    
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Daily
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             Kms
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
Monthly             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             Kms
             </td>
         </tr>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
Yearly            </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             Kms
             </td>
         </tr>
        
       
     </tbody>
 </table>


    </div>
    <div className=" mb-4 px-2">

    <div className="bg-yellow-100">

Senario 3



</div>
    <table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
     <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
         <tr>
            
         </tr>
     </thead>
     <tbody>
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of passengers for peak hours:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
              users/hour
             </td>
         </tr>

         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             Number of passengers for off-peak hours:
             </th>
             
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
            
             </td>
             <td className="px-6 py-4 font-medium text-gray-900 bg-indigo-100">
             users/hour
             </td>
         </tr>
       
     </tbody>
 </table>
    </div>
   
  
    
  </div>




  <Link to='/thirdpage'
      ><Button style={{ marginTop: "30px" }}>Next</Button></Link>

    </div>
  );
};

export default FleetSizeDataResults;
