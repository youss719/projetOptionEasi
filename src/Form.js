import React,  { useState }  from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';


function FormikForm() {
  const [selectedValue1, setSelectedValue1] = useState('yes');
  const [selectedValue2, setSelectedValue2] = useState('yes');

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
        in12: ''
      }}
     
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
     {({ values }) => (
        <Form style={{padding: '20px'}}>
          <h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>3. TCO Comparision - Data entry</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}}><strong>The Total Cost of Ownership (TCO) calculation provides a comparative calculation of the total investiments, operation costs and foreseen revenues for implemeting a service with autonomous shuttles for collective transport.</strong><br></br><br></br>
           In this tab, after selecting how the fleet of autonomous shuttles was calcualted (either by one of the different scenarios via the demand side, or via supply), you have the option to select what type of human-driven vehicle (baseline) will be used for the comparative analysis. The total fleet size for the baseline vehicle will be automaticaly generated based on the fleet size for the autonomous shuttles. 
           Once this is done, the monetary values for CAPEX and OPEX must be filled for both the baseline vehicle and the autonomous shuttle (indicating for each item whether it applies to a single vehicle or to the entire fleet). 
          </p>
          <p style={{color:'black'}}><strong>indicate on the table below how the fleet size was calculated :</strong> </p>


          <table style={{ border: '1px solid black' }}>    
<thead>
</thead>
<tbody>
<div id="my-radio-group"></div>
<div role="group" aria-labelledby="my-radio-group">
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked"  value="" /></label></td>
    <td style={{ border: '1px solid black' }} >Scénario 1</td>
    <td rowspan="3">Savings for holiday!</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }}>   <label> <Field type="radio" name="picked" value="" /></label></td>
    <td style={{ border: '1px solid black' }} >Scénario 2</td>
    
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="" /></label></td>
    <td style={{ border: '1px solid black' }} >Scénario 3</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="" /></label></td>
    <td style={{ border: '1px solid black' }}  colspan="4">Via Supply</td>
  </tr>
 
  </div>
</tbody>

</table>
<br></br>

<table style={{ border: '1px solid black' }}>
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black' }}>
                 shuttle fleet size
                </td>
                <td style={{ border: '1px solid black' }}>
                 Result
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black' }}>
                  LifeTime for shuttle
                </td>
                <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table style={{ border: '1px solid black', padding: '10px' }}>
  <tbody>
    <tr>
      <td style={{ border: '1px solid black', padding: '10px' }}>Are onboard safety drivers required for the operations of the service</td>
      <td style={{ border: '1px solid black', padding: '10px' }}>
        <select value={selectedValue1} onChange={handleDropdownChange1}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid black', padding: '10px' }}>
        {selectedValue1 === 'yes' ? <span>Number of onboard safety drivers needed for the full operation of ONE shuttle</span> : <span>Proceed to next item, no need to fill in data here</span>}
      </td>
      <td style={{ border: '1px solid black', padding: '10px' }}>2</td>
    </tr>
    
  </tbody>

</table>
<br />
          <table style={{ border: '1px solid black', padding: '10px' }}>
  <tbody>
    <tr>
      <td style={{ border: '1px solid black', padding: '10px' }}>Are offboard superviosrs  required for the operations of the service</td>
      <td style={{ border: '1px solid black', padding: '10px' }}>
        <select value={selectedValue2} onChange={handleDropdownChange2}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid black', padding: '10px' }}>
        {selectedValue2 === 'yes' ? <span>Number of offboard supervisors needed for the full operation of the FLEET</span> : <span>Proceed to next item, no need to fill in data here</span>}
      </td>
      <td style={{ border: '1px solid black', padding: '10px' }}>0</td>
    </tr>
    </tbody>

</table>
    <br></br>
    <table style={{ border: '1px solid black' }}>
            <tbody>
            <tr>
                <td style={{ border: '1px solid black' }}  colSpan="3">Maximum total of kilometers per shuttle</td>
              
 
              </tr>
              <tr>
                <td  style={{ border: '1px solid black' }}   >Daily:</td>
                <td style={{ border: '1px solid black' }}   >0.0</td>
                <td style={{ border: '1px solid black' }}  >kms</td>
              
                
              </tr>
              <tr>
               
              <td style={{ border: '1px solid black' }}   >Montly:</td>
                <td style={{ border: '1px solid black' }}  >0.0</td>
                <td style={{ border: '1px solid black' }}   >kms</td>
              </tr>
              <tr>
              <td style={{ border: '1px solid black' }}  >Yearly</td>
                <td style={{ border: '1px solid black' }}    >0.0</td>
                <td style={{ border: '1px solid black' }}   >kms</td>
              </tr>
            </tbody>
          </table>
          <p style={{color:'black'}}><strong>Comparative analysis with human driven transit vehicles (baseline bus): </strong></p>

          <table style={{ border: '1px solid black' }}>    
<thead>
</thead>
<tbody>

<tr>
    <td style={{ border: '1px solid black' }} >   </td>
    <td style={{ border: '1px solid black' }} >Baseline vehicle</td>
    <td style={{ border: '1px solid black' }}>Abbreviation</td>
    <td style={{ border: '1px solid black' }}>Capacity</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="S12m ICE" /></label></td>
    <td style={{ border: '1px solid black' }} >12 meters Internal Combustion Engine bus</td>
    <td style={{ border: '1px solid black' }} >S12m ICE</td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input5" />
                </td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="6m ICE" /></label></td>
    <td style={{ border: '1px solid black' }} >12 meters Electric bus</td>
    <td style={{ border: '1px solid black' }} >12m EV</td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input6" />
                </td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="6m ICE" /></label></td>
    <td style={{ border: '1px solid black' }} >6 meters Internal Combustion Engine bus</td>
    <td style={{ border: '1px solid black' }} >6m ICE</td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input7" />
                </td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="6m EV" /></label></td>
    <td style={{ border: '1px solid black' }} >6 meters Electric bus</td>
    <td style={{ border: '1px solid black' }} >6m EV</td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input8" />
                </td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="Carsharing" /></label></td>
    <td style={{ border: '1px solid black' }} >Carsharing</td>
    <td style={{ border: '1px solid black' }} >Carsharing</td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input9" />
                </td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="Private Car" /></label></td>
    <td style={{ border: '1px solid black' }} >Private Car</td>
    <td style={{ border: '1px solid black' }} >Private Car</td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input10" />
                </td>
  </tr><tr>
    <td style={{ border: '1px solid black' }} >  <label> <Field type="radio" name="picked" value="Other Specify" /></label></td>
    <td style={{ border: '1px solid black' }} >Other Specify</td>
    <td style={{ border: '1px solid black' }} >Other Specify</td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input11" />
                </td>
  </tr>

</tbody>

</table>
<br></br>
<table style={{ border: '1px solid black' }}>
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black' }}>
                Fleet size for  <strong> {values.picked}</strong>
                </td>
                <td style={{ border: '1px solid black' }}>
                 Result 
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black' }}>
                Lifetime for  <strong> {values.picked}</strong>
                
                </td>
                <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
<table style={{ border: '1px solid black' }}>
            <thead>
             
            </thead>
            <tbody>
             
              <tr>
                <td style={{ border: '1px solid black' }}>
                Number of drivers needed for the full operation of ONE baseline vehicle:
                </td>
                <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="input4" />
                </td>
              </tr>
            </tbody>
          </table>
          <h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>Capital Expenditures (CAPEX) comparative simulation</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}}>On the table below, complete with MONETARY values regarding the investiments costs (or Capital Expenditures - CAPEX) for both the baseline vehicle you have chosen and for the autonomous shuttle. 
<br></br><strong>
If monetary values for the shuttle are not available, please use the sliders in column M to provide an estimate percentage for the costs for the autonomous shuttle compared to the baseline vehicle. For example: If the shuttle feasibility studies cost 20% higher than the baseline vehicle, move the slider to 20%. If a given CAPEX for the shuttle is 10% lower than your baseline, move the slider until it indicates -10%.</strong> An automatic percentual variation of the shuttle cost compared to the baseline bus will be displayed on column O of the comparative analysis .

</p>


<p style={{color: 'red'}}><strong>If you do not know the exact costs for the autonomous shuttles (neither an estimate), please select the button to use generic costs:</strong></p>
<label>
              Use generic costs:
              <Field type="radio" name="picked" value="" />
            </label>
           
            <label>
              Fill data manually (or use the sliders for estimation):
              <Field type="radio" name="picked" value="" />
              
            </label>
            <br />

            <table style={{ border: '1px solid black' }}>    
<thead>
</thead>
<tbody>
<tr>
<td style={{ border: '1px solid black' }} >   </td>
    <td style={{ border: '1px solid black' }} colSpan='7'> Current CAPEX evaluation of the service compared to baseline bus   </td>
    
  </tr>
<tr>
    <td style={{ border: '1px solid black' }} >  CAPEX sources </td>
    <td style={{ border: '1px solid black' }} >Does this CAPEX apply to a single bus or to the entire BUS fleet?</td>
    <td style={{ border: '1px solid black' }}>{values.picked}</td>
    <td style={{ border: '1px solid black' }}>Does this CAPEX apply to a single shuttle or to the entire fleet?</td>
    <td style={{ border: '1px solid black' }}>Autonomous shuttle</td>
    <td style={{ border: '1px solid black' }}>If monetary values for the shuttle are not available, use the sliders to indicate the % CAPEX variation compared to the baseline bus</td>
    <td style={{ border: '1px solid black' }} colSpan='2'>Shuttle CAPEX estimation compared to baseline bus</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} > 1. Feasibility study</td>

    <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in1" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in2" />
                </td>
                <td style={{ border: '1px solid black' }}>
                  
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 2. Commissioning costs</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

       <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in3" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in4" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 3. Vehicle acquisitions</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in5" />
                </td>

   <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in6" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
    
  <td style={{ border: '1px solid black' }} > 4. Infrastructure works</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in7" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in8" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 5. Certification and stantardization</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in9" />
                </td>
                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in10" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 6. Additional services</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in11" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in12" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>

</tbody>

</table>
<h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>Yearly Operation Expenditures (OPEX) comparative simulation</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}}>On the table below, complete with MONETARY values regarding the ANNUAL Operation Expenditures (OPEX) for both the baseline vehicle you have chosen and for the autonomous shuttle. 

<br></br><strong>
If monetary values for the shuttle are not available, please use the sliders in column M to provide an estimate percentage for the costs for the autonomous shuttle compared to the baseline vehicle. For example: If the insurance costs are 20% higher than the baseline vehicle, move the slider to 20%. If a given OPEX for the shuttle is 10% lower than your baseline, move the slider until it indicates -10%.
</strong>An automatic percentual variation of the shuttle cost compared to the baseline bus will be displayed on column O of the comparative analysis.

</p>


<p style={{color: 'red'}}><strong>If you do not know the exact costs for the autonomous shuttles (neither an estimate), please select the button to use generic costs:</strong></p>
<label>
              Use generic costs:
              <Field type="radio" name="picked" value="" />
            </label>
           
            <label>
              Fill data manually (or use the sliders for estimation):
              <Field type="radio" name="picked" value="" />
              
            </label>
            <br />

            <table style={{ border: '1px solid black' }}>    
<thead>
</thead>
<tbody>
<tr>
<td style={{ border: '1px solid black' }} >   </td>
    <td style={{ border: '1px solid black' }} colSpan='7'> Current CAPEX evaluation of the service compared to baseline bus   </td>
    
  </tr>
<tr>
    <td style={{ border: '1px solid black' }} >  CAPEX sources </td>
    <td style={{ border: '1px solid black' }} >Does this CAPEX apply to a single bus or to the entire BUS fleet?</td>
    <td style={{ border: '1px solid black' }}>{values.picked}</td>
    <td style={{ border: '1px solid black' }}>Does this CAPEX apply to a single shuttle or to the entire fleet?</td>
    <td style={{ border: '1px solid black' }}>Autonomous shuttle</td>
    <td style={{ border: '1px solid black' }}>If monetary values for the shuttle are not available, use the sliders to indicate the % CAPEX variation compared to the baseline bus</td>
    <td style={{ border: '1px solid black' }} colSpan='2'>Shuttle CAPEX estimation compared to baseline bus</td>
  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} > 1. Personnel</td>

    <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in13" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in14" />
                </td>
                <td style={{ border: '1px solid black' }}>
                  
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 2. Insurance</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

       <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in15" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in16" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 3. Taxes and Fees</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in17" />
                </td>

   <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in18" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
    
  <td style={{ border: '1px solid black' }} > 4. Maintenance</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in19" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in20" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 5. Additional services</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in21" />
                </td>
                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in22" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 6.Fuel/Energy consumption</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in23" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in24" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 7. Cleaning</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in25" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in26" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 8. Advertising</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in27" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in28" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
  
  <tr>
  <td style={{ border: '1px solid black' }} > Hidden costs</td>
  <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>
            <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in29" />
                </td>

                <td style={{ border: '1px solid black' }} ><label>
             Single vehicule
              <Field type="radio" name="picked" value="" />
            </label>
            <label>
              Entire fleet
              <Field type="radio" name="picked" value="" />
            </label></td>

    <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in30" />
                </td>
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>result</td>
  </tr>
</tbody>

</table>
<h3 style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}>Revenues sources comparative simulation</h3>
          <p style={{color: 'black', backgroundColor: '#f2f2f2'}}>On the table below, please use the sliders to provide the estimate percentge of the operational costs that are covered by each type of revenue source, both for the baseline vehicle as well as for the autonomous shuttle.
          <p style={{color: 'red'}}><strong>NOTE: the sum of revenue sources should not surpass 100%
</strong></p>

</p>

            <table style={{ border: '1px solid black' }}>    
<thead>
</thead>
<tbody>

<tr>
    <td style={{ border: '1px solid black' }} >  REVENUE SOURCE</td>
    <td style={{ border: '1px solid black' }} >{values.picked}</td>
    <td style={{ border: '1px solid black' }}>%</td>

    <td style={{ border: '1px solid black' }}>Autonomous shuttle</td>
    <td style={{ border: '1px solid black' }}>%</td>

  </tr>
  <tr>
    <td style={{ border: '1px solid black' }} > 1. Ticketing</td>

                <td style={{ border: '1px solid black' }}>
                  
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>
                  
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 2. Subsidies</td>

                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>
                  
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  /></td>
                  <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 3. Financing from companies</td>
  
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>
                  
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
  </tr>
  <tr>
    
  <td style={{ border: '1px solid black' }} > 4. Advertising by 3rd parties</td>

                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>
                  
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  /></td>
                  <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 5. Data commercialization</td>
 
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>
                  
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  /></td>
                  <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
  </tr>
  <tr>
  <td style={{ border: '1px solid black' }} > 6.EU Funding</td>
  
                <td style={{ border: '1px solid black' }}>
      <input
        type="range"
        min="-100"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      /></td>
      <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
      <td style={{ border: '1px solid black' }}>
                  
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  /></td>
                  <td style={{ border: '1px solid black' }}>{sliderValue}%</td>
  </tr>
  <tr>
  <td rowSpan='0'></td>
  <td rowSpan='0'></td>            
          <td style={{ border: '1px solid black' }}>Result</td>
          <td rowSpan='0'></td>  
                  <td style={{ border: '1px solid black' }}>Result</td>
  </tr>
  
</tbody>

</table>
<br></br>

<table style={{ border: '1px solid black' }}>
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black' }}>
                Expected profit margin
                </td>
                <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in31" />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black' }}>
                Payment transaction fee 
                </td>
                <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in32" />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black' }}>
                Value Added Tax (VAT)
                </td>
                <td style={{ border: '1px solid black' }}>
                  <Field type="text" name="in33" />
                </td>
              </tr>
            </tbody>
          </table>

        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

     