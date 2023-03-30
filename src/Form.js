import React,  { useState }  from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";


function FormikForm() {
  const [selectedValue1, setSelectedValue1] = useState('yes');
  const [selectedValue2, setSelectedValue2] = useState('yes');


  var formValues ;


  const revenueCalculation = (v1,v2,v3,v4,v5,v6)=>{
    var result = v1+v2+v3+v4+v5+v6;
      if(result > 100){
        return "ERROR";
      }
      else return result;
  
    }

  const shuttleCalculation = (values1,values2, values3)=>{
    if(values1 === 0){
      return (values2*values3)+values2;
    }
    else return "n/a"

  }


  const [fleet, setFleet] = useState("");
  
  const handleFleet = (event) => {
    setFleet(event.target.value);
  }


  const [generics1, setGenerics1] = useState("");
  
  const handleGenerics1 = (event) => {
    setGenerics1(event.target.value);
  }
  const [generics2, setGenerics2] = useState("");
  
  const handleGenerics2 = (event) => {
    setGenerics2(event.target.value);
  }

  



  const handleDropdownChange1 = (event) => {
    setSelectedValue1(event.target.value);
  }

  const handleDropdownChange2 = (event) => {
    setSelectedValue2(event.target.value);
  }
  
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  } 
  const [sliderValue1, setSliderValue1] = useState(0);

  const handleSliderChange1 = (event) => {
    setSliderValue1(event.target.value);
  } 
  
  const [sliderValue2, setSliderValue2] = useState(0);

  const handleSliderChange2 = (event) => {
    setSliderValue2(event.target.value);
  }
  const [sliderValue3, setSliderValue3] = useState(0);

  const handleSliderChange3 = (event) => {
    setSliderValue3(event.target.value);
  }
  const [sliderValue4, setSliderValue4] = useState(0);

  const handleSliderChange4 = (event) => {
    setSliderValue4(event.target.value);
  }
  const [sliderValue5, setSliderValue5] = useState(0);

  const handleSliderChange5 = (event) => {
    setSliderValue5(event.target.value);
  }
  const [sliderValue6, setSliderValue6] = useState(0);

  const handleSliderChange6= (event) => {
    setSliderValue6(event.target.value);
  }
  const [sliderValue7, setSliderValue7] = useState(0);

  const handleSliderChange7 = (event) => {
    setSliderValue7(event.target.value);
  }
  const [sliderValue8, setSliderValue8] = useState(0);

  const handleSliderChange8 = (event) => {
    setSliderValue8(event.target.value);
  }
  const [sliderValue9, setSliderValue9] = useState(0);

  const handleSliderChange9 = (event) => {
    setSliderValue9(event.target.value);
  }
  const [sliderValue10, setSliderValue10] = useState(0);

  const handleSliderChange10 = (event) => {
    setSliderValue10(event.target.value);
  }
  const [sliderValue11, setSliderValue11] = useState(0);

  const handleSliderChange11 = (event) => {
    setSliderValue11(event.target.value);
  }
  const [sliderValue12, setSliderValue12] = useState(0);

  const handleSliderChange12 = (event) => {
    setSliderValue12(event.target.value);
  }
  const [sliderValue13, setSliderValue13] = useState(0);

  const handleSliderChange13 = (event) => {
    setSliderValue13(event.target.value);
  }
  const [sliderValue14, setSliderValue14] = useState(0);

  const handleSliderChange14 = (event) => {
    setSliderValue14(event.target.value);
  }
  const [sliderValue15, setSliderValue15] = useState(0);

  const handleSliderChange15 = (event) => {
    setSliderValue15(event.target.value);
  }
  const [sliderValue16, setSliderValue16] = useState(0);

  const handleSliderChange16 = (event) => {
    setSliderValue16(event.target.value);
  }
  const [sliderValue17, setSliderValue17] = useState(0);

  const handleSliderChange17 = (event) => {
    setSliderValue17(event.target.value);
  }
  const [sliderValue18, setSliderValue18] = useState(0);

  const handleSliderChange18 = (event) => {
    setSliderValue18(event.target.value);
  }
  const [sliderValue19, setSliderValue19] = useState(0);

  const handleSliderChange19 = (event) => {
    setSliderValue19(event.target.value);
  }
  const [sliderValue20, setSliderValue20] = useState(0);

  const handleSliderChange20 = (event) => {
    setSliderValue20(event.target.value);
  }
  const [sliderValue21, setSliderValue21] = useState(0);

  const handleSliderChange21 = (event) => {
    setSliderValue21(event.target.value);
  }
  const [sliderValue22, setSliderValue22] = useState(0);

  const handleSliderChange22 = (event) => {
    setSliderValue22(event.target.value);
  }
  const [sliderValue23, setSliderValue23] = useState(0);

  const handleSliderChange23 = (event) => {
    setSliderValue23(event.target.value);
  }
  const [sliderValue24, setSliderValue24] = useState(0);

  const handleSliderChange24 = (event) => {
    setSliderValue24(event.target.value);
  }
  const [sliderValue25, setSliderValue25] = useState(0);

  const handleSliderChange25 = (event) => {
    setSliderValue25(event.target.value);
  }
  const [sliderValue26, setSliderValue26] = useState(0);

  const handleSliderChange26 = (event) => {
    setSliderValue26(event.target.value);
  }
  const [sliderValue27, setSliderValue27] = useState(0);

  const handleSliderChange27 = (event) => {
    setSliderValue27(event.target.value);
  }
  const [sliderValue28, setSliderValue28] = useState(0);

  const handleSliderChange28 = (event) => {
    setSliderValue28(event.target.value);
  }




  


  
  return (
    <Formik
      initialValues={{
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false, 
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        useGenericCosts: false, 
        fillDataManually: false,
        picked: '',
        in1: '',
        in2: '',
        in3: '',
        in4: '',
        in5: '',
        in6: '',
        in7: '',
        in8: '',
        in9: '',
        in10: '',
        in11: '',
        in12: '',
        in13: '',
        in14: '',
        in15: '',
        in16: '',
        in17: '',
        in18: '',
        in19: '',
        in20: '',
        in21: '',
        in22: '',
        in23: '',
        in24: '',
        in25: '',
        in26: '',
        in27: '',
        in28: '',
        in29: '',
        in30: '',
        in31: '',
        in32: '',
        in33: ''
        
        
      }}
     
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
     {({ values }) => (
        <Form style={{padding: '20px'}}>
          <h3  className="bg-red-200 text-center p-2 text-white text-lg font-font-bold font-mono italic">3. TCO Comparision - Data entry</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}}><strong>The Total Cost of Ownership (TCO) calculation provides a comparative calculation of the total investiments, operation costs and foreseen revenues for implemeting a service with autonomous shuttles for collective transport.</strong><br></br><br></br>
           In this tab, after selecting how the fleet of autonomous shuttles was calcualted (either by one of the different scenarios via the demand side, or via supply), you have the option to select what type of human-driven vehicle (baseline) will be used for the comparative analysis. The total fleet size for the baseline vehicle will be automaticaly generated based on the fleet size for the autonomous shuttles. 
           Once this is done, the monetary values for CAPEX and OPEX must be filled for both the baseline vehicle and the autonomous shuttle (indicating for each item whether it applies to a single vehicle or to the entire fleet). 
          </p>
          <p style={{color:'black'}}><strong>indicate on the table below how the fleet size was calculated :</strong> </p>


          <div class="grid grid-rows-3 grid-flow-col gap-4 justify-items-center p-2">
  <div class="row-span-3 justify-items-center">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">    
<thead>
 
</thead>
<tbody>
<div id="my-radio-group"></div>
<div role="group" aria-labelledby="my-radio-group">
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className='border border-grey p-2' >  <label> <Field type="radio" name="picked"  value="scenario1" onChange={handleFleet} checked={fleet === "scenario1"} /></label></td>
    <td className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-grey p-1' >Scénario 1</td>
    <td rowspan="3" className='text-justify text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-grey p-3'>Via demande</td>
  </tr>
  <tr>
    <td className='border border-grey p-2'>   <label> <Field type="radio" name="picked" value="scenario2" checked={fleet === "scenario2"} onChange={handleFleet} /></label></td>
    <td className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-grey p-1'>Scénario 2</td>
    
  </tr>
  <tr>
    <td className='border border-grey p-2' >  <label> <Field type="radio" name="picked" value="scenario3" onChange={handleFleet} checked={fleet === "scenario3"} /></label></td>
    <td className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-grey p-1'>Scénario 3</td>
  </tr>
  <tr>
    <td className='border border-grey p-2' >  <label> <Field type="radio" name="picked" value="viaSupply" onChange={handleFleet} checked={fleet === "viaSupply"} /></label></td>
    <td className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-grey p-1 text-center'  colspan="4">Via Supply</td>
  </tr>
 
  </div>
</tbody>

</table></div>
  <div class="col-span-2 ...">
    <table class=" text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td class="p-1 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 shuttle fleet size
                </td>
                <td class="p-1 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 Result
                </td>
              </tr>
              <tr>
                <td class=" p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  LifeTime for shuttle
                </td>
                <td class=" p-1 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table></div>
  <div class="row-span-2 col-span-2 ...">

  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
            <tr>
                <td className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-3">Maximum total of kilometers per shuttle</td>
              
 
              </tr>
              <tr>
                <td className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-3"  >Daily:</td>
                <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"   > {fleet === "scenario1" && (
        <div></div>
      )}
      {fleet === "scenario2" && (
        <div></div>
      )}
      {fleet === "scenario3" && (
        <div></div>
      )}
      {fleet === "viaSupply" && (
        <div></div>
      )}</td>
                <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"  >km</td>
              
                
              </tr>
              <tr>
               
              <td className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-3"   >Montly:</td>
                <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"  >0.0</td>
                <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >km</td>
              </tr>
              <tr>
              <td className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-3"  >Yearly</td>
                <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"    >0.0</td>
                <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"   >km</td>
              </tr>
            </tbody>
          </table>


  </div>
</div>

          
<br></br>


          <br />


          <div class="grid grid-cols-2 gap-4">
  <div>

  <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">
  <tbody>
    <tr>
      <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4">Are onboard safety drivers required for the operations of the service</td>
      <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 pl-4">
        <select value={selectedValue1} onChange={handleDropdownChange1}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        {selectedValue1 === 'yes' ? <span>Number of onboard safety drivers needed for the full operation of ONE shuttle</span> : <span>Proceed to next item, no need to fill in data here</span>}
      </td>
      <td className="p-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700"><Field type="text" name="picked"  value=""  /></td>
    </tr>
    
  </tbody>

</table>

  </div>
 
  <div>

  <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">
  <tbody>
    <tr>
      <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">Are offboard superviosrs  required for the operations of the service</td>
      <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <select value={selectedValue2} onChange={handleDropdownChange2}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        {selectedValue2 === 'yes' ? <span>Number of offboard supervisors needed for the full operation of the FLEET</span> : <span>Proceed to next item, no need to fill in data here</span>}
      </td>
      <td className="p-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700"><Field type="text" name="picked"  value=""  /></td>
    </tr>
    </tbody>

</table>

  </div>
</div>


          
<br />
<p style={{color:'black'}} className="mb-2"><strong>Comparative analysis with human driven transit vehicles (baseline bus): </strong></p>

 
    <br></br>

    <div className="grid grid-rows-4 grid-flow-col gap-4 justify-items-center ">
  <div className="row-span-4 ">
  <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">    
<thead>
</thead>
<tbody>

<tr>
    <td className="p-2 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >   </td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >Baseline vehicle</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">Abbreviation</td>
    <td className="p-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">Capacity</td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  <label> <Field type="radio" name="picked" value="S12m ICE" /></label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >12 meters Internal Combustion Engine bus</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >S12m ICE</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                  <Field type="text" name="input5" />
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  <label> <Field type="radio" name="picked" value="6m ICE" /></label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >12 meters Electric bus</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >12m EV</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                  <Field type="text" name="input6" />
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  <label> <Field type="radio" name="picked" value="6m ICE" /></label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >6 meters Internal Combustion Engine bus</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >6m ICE</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                  <Field type="text" name="input7" />
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  <label> <Field type="radio" name="picked" value="6m EV" /></label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >6 meters Electric bus</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >6m EV</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                  <Field type="text" name="input8" />
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">  <label> <Field type="radio" name="picked" value="Carsharing" /></label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >Carsharing</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >Carsharing</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                  <Field type="text" name="input9" />
                </td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  <label> <Field type="radio" name="picked" value="Private Car" /></label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >Private Car</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >Private Car</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                  <Field type="text" name="input10" />
                </td>
  </tr><tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900" >  <label> <Field type="radio" name="picked" value="Other Specify" /></label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">Other Specify</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">Other Specify</td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-900">
                  <Field type="text" name="input11" />
                </td>
  </tr>

</tbody>

</table>
  </div>
  <div className="col-span-2 ">
  <table  className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Fleet size for  <strong> {values.picked}</strong>
                </td>
                <td  className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                 Result 
                </td>
              </tr>
              <tr>
                <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Lifetime for  <strong> {values.picked}</strong>
                
                </td>
                <td  className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table>
  </div>
  <div className="col-span-2">
  <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Fleet size for  <strong> {values.picked}</strong>
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                 Result 
                </td>
              </tr>
              <tr>
                <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Lifetime for  <strong> {values.picked}</strong>
                
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table>
  </div>
  <div className=" col-span-2">
  <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2">
            <thead>
             
            </thead>
            <tbody>
             
              <tr>
                <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Number of drivers needed for the full operation of ONE baseline vehicle:
                </td>
                <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table>



  </div>
</div>

    
          
<br></br>

          <br></br>

          <h3 className="bg-red-200 text-center p-2 text-white text-lg font-font-bold font-mono italic">Capital Expenditures (CAPEX) comparative simulation</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}} className="p-2">On the table below, complete with MONETARY values regarding the investiments costs (or Capital Expenditures - CAPEX) for both the baseline vehicle you have chosen and for the autonomous shuttle. 
<br></br><strong>
If monetary values for the shuttle are not available, please use the sliders in column M to provide an estimate percentage for the costs for the autonomous shuttle compared to the baseline vehicle. For example: If the shuttle feasibility studies cost 20% higher than the baseline vehicle, move the slider to 20%. If a given CAPEX for the shuttle is 10% lower than your baseline, move the slider until it indicates -10%.</strong> An automatic percentual variation of the shuttle cost compared to the baseline bus will be displayed on column O of the comparative analysis .

</p>


<p style={{color: 'red'}}><strong>If you do not know the exact costs for the autonomous shuttles (neither an estimate), please select the button to use generic costs:</strong></p>
<label>
              Use generic costs:
              <Field type="radio" name="pickedno1" value="yes" onChange={handleGenerics1} checked={generics1 === "yes"}/>
            </label>
           
            <label>
              Fill data manually (or use the sliders for estimation):
              <Field type="radio" name="pickedno2" value="no" onChange={handleGenerics1} checked={generics1 === "no"}/>
              
            </label>
            <br />

            <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2 text-center ">    
<thead>
</thead>
<tbody>
<tr>
<td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >   </td>
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center" colSpan='7'> Current CAPEX evaluation of the service compared to baseline bus   </td>
    
  </tr>
<tr>
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center" >  CAPEX sources </td>
    
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center">Does this CAPEX apply to a single bus or to the entire BUS fleet?</td>
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center">{values.picked}</td>
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center">Does this CAPEX apply to a single shuttle or to the entire fleet?</td>
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center">Autonomous shuttle</td>
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center">If monetary values for the shuttle are not available, use the sliders to indicate the % CAPEX variation compared to the baseline bus</td>
    <td className="p-4 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  text-center" colSpan='2'>Shuttle CAPEX estimation compared to baseline bus</td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 1. Feasibility study</td>
    
  

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in1" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in2" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      {generics1 === "yes" && (
        <div>6 000Є</div>
      )}
      {generics1 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in2,formValues.in1, sliderValue)}</div>)
        
      )}
        </td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 2. Commissioning costs</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

       <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in3" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in4" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue1}
        onChange={handleSliderChange1}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue1}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics1 === "yes" && (
        <div>35 000Є</div>
      )}
      {generics1 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in4,formValues.in3, sliderValue1)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 3. Vehicle acquisitions</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in5" />
                </td>

   <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in6" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue2}
        onChange={handleSliderChange2}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue2}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"> {generics1 === "yes" && (
        <div>275 000Є</div>
      )}
     {generics1 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in6,formValues.in5, sliderValue2)}</div>)
        
      )}</td>
  </tr>
  <tr>
    
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 4. Infrastructure works</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in7" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in8" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue3}
        onChange={handleSliderChange3}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue3}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics1 === "yes" && (
        <div>20 000Є</div>
      )}
     {generics1 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in8,formValues.in7, sliderValue3)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 5. Certification and stantardization</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in9" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in10" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue4}
        onChange={handleSliderChange4}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue4}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics1 === "yes" && (
        <div>1 000Є</div>
      )}
      {generics1 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in10,formValues.in9, sliderValue4)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 6. Additional services</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in11" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in12" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue5}
        onChange={handleSliderChange5}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue5}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics1 === "yes" && (
        <div>9 000Є</div>
      )}
      {generics1 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in12,formValues.in11, sliderValue5)}</div>)
        
      )}</td>
  </tr>

</tbody>

</table>
<h3 className="bg-red-200 text-center p-2 text-white text-lg font-font-bold font-mono italic mt-3">Yearly Operation Expenditures (OPEX) comparative simulation</h3>
          <p className="p-2" style={{color: 'black', backgroundColor: '#f2f2f2'}}>On the table below, complete with MONETARY values regarding the ANNUAL Operation Expenditures (OPEX) for both the baseline vehicle you have chosen and for the autonomous shuttle. 

<br></br><strong>
If monetary values for the shuttle are not available, please use the sliders in column M to provide an estimate percentage for the costs for the autonomous shuttle compared to the baseline vehicle. For example: If the insurance costs are 20% higher than the baseline vehicle, move the slider to 20%. If a given OPEX for the shuttle is 10% lower than your baseline, move the slider until it indicates -10%.
</strong>An automatic percentual variation of the shuttle cost compared to the baseline bus will be displayed on column O of the comparative analysis.

</p>


<p style={{color: 'red'}}><strong>If you do not know the exact costs for the autonomous shuttles (neither an estimate), please select the button to use generic costs:</strong></p>
<label>
              Use generic costs:
             
              <Field type="radio" name="pickedno2" value="yes" onChange={handleGenerics2} checked={generics2 === "yes"}/>
            </label>
           
            <label>
              Fill data manually (or use the sliders for estimation):
              <Field type="radio" name="pickedyes2" value="no" onChange={handleGenerics2} checked={generics2 === "no"}/>
              
            </label>
            <br />
            

            <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2 text-center">    
<thead>
</thead>
<tbody>
<tr>
<td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">   </td>
    <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center" colSpan='7'>Current OPEX evaluation of the service compared to baseline bus   </td>
    
  </tr>
<tr>
    <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >  Yearly OPEX sources </td>
    <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >Does this OPEX apply to a single bus or to the entire fleet?</td>
    <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">{values.picked}</td>
    <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">Does this OPEX apply to a single shuttle or to the entire fleet?</td>
    <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">Autonomous shuttle</td>
    <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">If monetary values for the shuttle are not available, use the sliders to indicate the % OPEX variation compared to the baseline bus</td>
    <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" colSpan='2'>Shuttle OPEX estimation compared to baseline bus</td>
  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 1. Personnel</td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in13" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in14" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 ">
                  
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue6}
        onChange={handleSliderChange6}
        className="place-self-center"
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue6}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>45 000Є</div>
      )}
      {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in14,formValues.in13, sliderValue6)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 2. Insurance</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

       <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in15" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in16" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue7}
        onChange={handleSliderChange7}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue7}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>6 000Є</div>
      )}
       {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in16,formValues.in15, sliderValue7)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 3. Taxes and Fees</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in17" />
                </td>

   <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in18" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue8}
        onChange={handleSliderChange8}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue8}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>5 000Є</div>
      )} {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in18,formValues.in17, sliderValue8)}</div>)
        
      )}</td>
  </tr>
  <tr>
    
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 4. Maintenance</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in19" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in20" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue9}
        onChange={handleSliderChange9}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue9}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>60 000Є</div>
      )} {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in20,formValues.in19, sliderValue9)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 5. Additional services</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in21" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in22" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue10}
        onChange={handleSliderChange10}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue10}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>18 000Є</div>
      )} {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in22,formValues.in21, sliderValue10)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 6.Fuel/Energy consumption</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in23" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in24" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue11}
        onChange={handleSliderChange11}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue11}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>1 000Є</div>
      )} {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in24,formValues.in23, sliderValue11)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 7. Cleaning</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in25" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in26" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue12}
        onChange={handleSliderChange12}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue12}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>6 000Є</div>
      )} {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in26,formValues.in25, sliderValue12)}</div>)
        
      )}</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 8. Advertising</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in27" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in28" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue13}
        onChange={handleSliderChange13}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue13}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>2 800Є</div>
      )} {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in28,formValues.in27, sliderValue13)}</div>)
        
      )}</td>
  </tr>
  
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > Hidden costs</td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in29" />
                </td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  <Field type="text" name="in30" />
                </td>
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue14}
        onChange={handleSliderChange14}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue14}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{generics2 === "yes" && (
        <div>1 500Є</div>
      )} {generics2 === "no" && (
        formValues !== undefined &&  formValues !== null && (<div>{shuttleCalculation(formValues.in30,formValues.in29, sliderValue14)}</div>)
        
      )}</td>
  </tr>
</tbody>

</table>
<h3 className="bg-red-200 text-center p-2 text-white text-lg font-font-bold font-mono italic">Revenues sources comparative simulation</h3>
          
          <p className="p-2" style={{color: 'black', backgroundColor: '#f2f2f2'}}>On the table below, please use the sliders to provide the estimate percentge of the operational costs that are covered by each type of revenue source, both for the baseline vehicle as well as for the autonomous shuttle.
          <p className="p-2" style={{color: 'red'}}><strong>NOTE: the sum of revenue sources should not surpass 100%
</strong></p>

</p>

<div className='flex flex-col  px-56'>

            <table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2 mt-2">    
<thead>
</thead>
<tbody>

<tr>
    <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center" >  REVENUE SOURCE</td>
    <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center" >{values.picked} hna cell C39</td>
    <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">%</td>

    <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">Autonomous shuttle</td>
    <td className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">%</td>

  </tr>
  <tr>
    <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 1. Ticketing</td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue15}
        onChange={handleSliderChange15}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue15}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue16}
        onChange={handleSliderChange16}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue16}%</td>
      
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 2. Subsidies</td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue17}
        onChange={handleSliderChange17}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue17}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue18}
                    onChange={handleSliderChange18}
                  /></td>
                  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue18}%</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 3. Financing from companies</td>
  
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue19}
        onChange={handleSliderChange19}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue19}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue20}
        onChange={handleSliderChange20}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue20}%</td>
  </tr>
  <tr>
    
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 4. Advertising by 3rd parties</td>

                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue21}
        onChange={handleSliderChange21}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue21}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue22}
                    onChange={handleSliderChange22}
                  /></td>
                  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue22}%</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"> 5. Data commercialization</td>
 
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue23}
        onChange={handleSliderChange23}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue23}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue24}
                    onChange={handleSliderChange24}
                  /></td>
                  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue24}%</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" > 6.EU Funding</td>
  
                <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue25}
        onChange={handleSliderChange25}
      /></td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue25}%</td>
      <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue26}
                    onChange={handleSliderChange26}
                  /></td>
                  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">{sliderValue26}%</td>
  </tr>
  <tr>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" rowSpan='0'></td>
  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" rowSpan='0'></td>            
          <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">Result</td>
          <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700" rowSpan='0'></td>  
                  <td className="p-2 bg-white text-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">Result</td>
  </tr>
  
</tbody>

</table>
<br></br>

<table className=" text-sm text-left text-gray-500 dark:text-gray-400 p-2 mt-4 mx-3 text-center">
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Expected profit margin
                </td>
                <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <Field type="text" name="in31" />
                </td>
              </tr>
              <tr>
                <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Payment transaction fee 
                </td>
                <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <Field type="text" name="in32" />
                </td>
              </tr>
              <tr>
                <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Value Added Tax (VAT)
                </td>
                <td  className="p-2 text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <Field type="text" name="in33" />
                </td>
              </tr>
            </tbody>
          </table>

          <Link to='/forthpage'
      ><Button style={{ marginTop: "30px" }} className="mb-3">Next</Button></Link>
          </div>

        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

     