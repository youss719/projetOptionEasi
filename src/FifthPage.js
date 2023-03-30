import React,  { useState }  from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";


function FifthPage() {
    const [selectedValue, setSelectedValue] = useState('');

    function handleDropdownChange(event) {
      setSelectedValue(event.target.value);
    }
  
    let displayText;
    switch (selectedValue) {
      case 'c1':
        displayText = 'Romania';
        break;
      case 'c2':
        displayText = 'Slovakia';
        break;
      case 'c3':
        displayText = 'Slovenia';
        break;
      case 'c4':
        displayText = 'Spain';
        break;
      case'c5':
        displayText = 'Sweden';
        break;
      case'c6':
          displayText = 'United Kingdom';
          break;
      case'c7':
            displayText = 'Norway';
            break;
      case'c8':
            displayText = 'Switzerland';
            break;
    }


  
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
         <h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>3. Local Impact - Data entry</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}}><strong>The Local Impact calculation provides a comparative calculation of the external costs for a service with autonomous shuttles for collective transport.

</strong><br></br>
External costs are costs that borne by the municipalities and not by the users and/or PTOs, such as: accidents costs, airpollution, noise, and congestion.<br/><br/>

The data from this analysis are secondary data from the "Handbook on the external costs of transport" (European Commission, 2019) and relate to local externalities for cars and buses for each member country of the European Union. The reference values for the autonomous shuttles have been calculated and adapted to suit the parameters of this type of vehicle. In this sense, the only inputs required in this tab are the select the country in which the service will be implemented and the the year of anylsis (to adjust the by inflation the reference values)</p>
          <br/>
          <div class="col-span-2 ...">
          <table class=" text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
             
            </thead>
            <tbody>
              <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700" >
                <td class="p-1 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 shuttle fleet size
                </td>
                <td class="p-1 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 Result
                </td>
              </tr>
              <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                <td class=" p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  LifeTime for shuttle
                </td>
                <td class="p-1 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 Result
                </td>
              </tr>
            </tbody>
          </table>
          </div>
<br/>
<div class="col-span-2 ...">
          <table class=" text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
             
            </thead>
            <tbody>
              
              <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
                <td class=" p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2'>
                Year of analysis:
                </td>
                <td class=" p-1 bg-white border-b dark:bg-gray-800 dark:border-gray-700" rowSpan='2' >
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
<br/>
          <div class="col-span-2 ...">
          <table class=" text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
             
            </thead>
            <tbody>
              
              <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
                <td class=" p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" rowSpan='2'>
                Inflation for the period
                </td>
                <td class="p-1 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 Result
                </td>
              </tr>
            </tbody>
          </table>
          </div>
<br/>
<table className="text-sm text-left text-gray-500 dark:text-gray-400 p-2">
      <tbody>
        < tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
          <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4">Country of analysis</td>
          <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4">
            <select value={selectedValue} onChange={handleDropdownChange}>
              <option value="">Select a country</option>
              <option value="c1">Romania</option>
              <option value="c2">Slovakia</option>
              <option value="c3">Slovenia</option>
              <option value="c4">Spain</option>
              <option value="c5">Sweden</option>
              <option value="c6">United Kingdom</option>
              <option value="c7">Norway</option>
              <option value="c8">Switzerland</option>
            </select>
          </td>
        </tr>
        
      </tbody>
    </table><br/>
    {displayText && (
         <table className="text-sm text-left text-gray-500 dark:text-gray-400 p-2">
         <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" rowspan="3">Local impacts for the context of : {displayText}</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" colspan="4">Reference values</td>
         </tr>
         <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700" >
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" colspan="2">€-cent per passenger/km</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" colspan="2">€-cent per vehicle/km</td>
         </tr>
         <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700" >
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Carshing</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Autonomous Shuttle</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Carshing</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Autonomous Shuttle</td>
         </tr>
         <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700" >
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Accidents costs</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
         </tr>
         <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700" >
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Airpollution costs</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
         </tr>
         <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700" >
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Noise costs</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
         </tr>
         <tr  className="bg-white border-t dark:bg-gray-800 dark:border-gray-700" >
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >Congestion costs</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
             <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4" >xx</td>
         </tr>
        
     </table>
         )}

<Link to='/'
      ><Button style={{ marginTop: "30px" }} className="mb-3">Restart</Button></Link>
        </Form>
      )}
    </Formik>
  );
}

export default FifthPage;

     