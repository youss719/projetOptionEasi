import React from "react";
import * as Yup from "yup";

import { Formik, Field, Form } from 'formik';
import { useFormik } from 'formik';
import {Link} from 'react-router-dom';

//import "@material-tailwind/react/tailwind.css";




// tailwind components
import { Button } from "@material-tailwind/react";

import {Checkbox} from "@material-tailwind/react/";
import TextInput from './TextInput';
import { useState } from 'react';

//import TextInput from "./components/TextInput";

const ContextctualizationComponent = () => {

    const [checked, setChecked] = useState(false);
    const [checkedNo, setCheckedNo] = useState(false);
    const [checkedUrban, setCheckedUrban] = useState(false);
    const [checkedRural, setCheckedRural] = useState(false);
    const [checkedPUrban, setCheckedPUrban] = useState(false);
    const [checkedRes, setCheckedRes] = useState(false);


    const [option1Checked, setOption1Checked] = useState(false);
    const [option2Checked, setOption2Checked] = useState(false);
    const [option3Checked, setOption3Checked] = useState(false);
    const [option4Checked, setOption4Checked] = useState(false);
    const [option5Checked, setOption5Checked] = useState(false);
  
    const handleOption1Change = (event) => {
      setOption1Checked(event.target.checked);
      setOption2Checked(false);
      setOption3Checked(false);
      setOption4Checked(false);
      setOption5Checked(false);
    };
  
    const handleOption2Change = (event) => {
      setOption1Checked(false);
      setOption2Checked(event.target.checked);
      setOption3Checked(false);
      setOption4Checked(false);
      setOption5Checked(false);

    };
  
    const handleOption3Change = (event) => {
      setOption1Checked(false);
      setOption2Checked(false);
      setOption3Checked(event.target.checked);
      setOption4Checked(false);
      setOption5Checked(false);

    };
  
    const handleOption4Change = (event) => {
      setOption1Checked(false);
      setOption2Checked(false);
      setOption3Checked(false);
      setOption4Checked(event.target.checked);
      setOption5Checked(false);

    };
    const handleOption5Change = (event) => {
      setOption1Checked(false);
      setOption2Checked(false);
      setOption3Checked(false);
      setOption4Checked(false);
      setOption5Checked(event.target.checked);

    };

    
  // perform some command
  const _onSave = (values) => {
    console.log(values);
  };


  const formik = useFormik({
    initialValues: {
      context1: '',
      context2: '',
     
    },
    onSubmit: values => {
      // alert(JSON.stringify( averageOperationalSpeed(values), null, 2));
      // setFisrtformvalues(values);
      // firstformvaluesVar= values;
      //setFisrtformvalues(values);
      console.log(values);
     

    },
  });


  return (
    <div>
        <p className="w-100  text-center">
        The purpose of this tab is to provide a qualitative overview of the service to be implemented.
         The questions to be answered here do not have a direct impact on the calculations of the other tabs
          (with the exception of questions about the size of the area and the number of inhabitants).
           With this, the objective is to help decision makers to better visualize the scope and dimension 
           of the service to be implemented.
           </p>
           <br/>
    
    {/* <Formik
      initialValues={{ email: "", password: "", checked: true }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("Required")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Include at least one Uppercase, Lowercase, Number and a special character"
          )
      })}
      onSubmit={(values) => _onSave(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="container">
            {/* <TextInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
              success={!errors.email && touched.email ? "Valid" : ""}
            /> </div> */}
<form onSubmit={formik.handleSubmit}>
<div>

            <p className="font-bold">Is there already public transport services being offered in the area where the shuttle will operate?											
</p>
            <Checkbox label="yes"   onChange={() => setChecked(!checked)} checked={checked} />
            <Checkbox label="no" onChange={() => setCheckedNo(!checkedNo)} checkedNo={checkedNo} />

            {
             checked ? (
             <p className="text-blue-700" >Autonomous shuttles will be offered as complementary or as a substitute to the current existing public transport services									
             </p>
               ) : (<div></div>)
           }
           {
             checkedNo ? (
             <p className="text-blue-700">Autonomous shuttles will be offered as a new public transport service										
             </p>
               ) : (<div></div>)
           }
            </div>

            <br/>



            <div>
            <p className="font-bold">What is the environment where the service will be deployed?											
											
</p>
            <Checkbox label="Urban"   onChange={() => setCheckedUrban(!checkedUrban)} checkedUrban={checkedUrban} />
            <Checkbox label="Peri-Urban" onChange={() => setCheckedUrban(!checkedPUrban)} checkedUrban={checkedUrban} />
            <Checkbox label="Rural" onChange={() => setCheckedRural(!checkedRural)} checkedRural={checkedRural} />

            {
             checkedUrban ? (
             <p className="text-blue-700">
Autonomous shuttles likely to be offered as complementary to the current existing public transport services														
Potential users will most likely be the current public transport users. Likelihood of modal-shift from other transport modes - mainly cars - towards the shuttles will be low														
The service will most likely be rapidly integrated in the public transport offerings														
Percentage of public transport utilization are most likely available - calculations of number of potential users can be based on data rather than estimations														


             </p>
               ) : (<div></div>)
           }
           {
             checkedPUrban ? (
             <p className="text-blue-700">Local context will dictate if the service is closer to urban where the shuttle will act as a complement to existing public transport, or to rural – with the shuttle being offered as a new service.																			
             Potential users may be either current users of public transport or users of other available transport modes who are willing to change.																			
             Behavioral change is needed, therefore integration of the service will be more difficult																			
             Calculation of the number of potential users depends on the specificities of the context. If public transport is available, the percentage of current users can be applied, if not, modal-shift estimates towards the shuttles should be created																			
                                                     
             </p>
               ) : (<div></div>)
           }
           {
             checkedRural ? (
             <p className="text-blue-700">Autonomous shuttles will be offered as a new service												
             Potential users will be users of other available transport modes who are willing to change												
             Behavioral change is needed, therefore integration of the service will be more difficult.												
             Calculations of number of potential users will be based on the estimations of percentage of people willing to undertake the modal-shift towards the shuttles												
               </p>
               ) : (<div></div>)
           }
            </div>
<br/>
            

            <div>
            <p className="font-bold">What is the zoning to be served by the service in such environment?											
											
</p>
            <Checkbox label="Residential"   checked={option1Checked} onChange={handleOption1Change} />
            <Checkbox label="Commercial" checked={option2Checked} onChange={handleOption2Change} />
            <Checkbox label="Industrial"  checked={option3Checked} onChange={handleOption3Change}/>
            <Checkbox label="Touristic" checked={option4Checked} onChange={handleOption4Change}/>
            <Checkbox label="Mixed"  checked={option5Checked} onChange={handleOption5Change}/>





            {option1Checked && <div class="w-85 mx-20" >

              
  <div class=" h-10 w-full min-w-[200px] mb-3">
  <label for="name" class="block text-gray-700 mb-2">What is the average extension of the area to be served by the service (km2 or mi2)?			</label>
  <input
      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " onChange={formik.handleChange}
      value={formik.values.context1}
     
      id="c1"
      name="context1"
      type="text"
    
    />		
    
  </div>
  <br/>

  <div class=" h-10 w-full min-w-[200px] mb-3">
    <label for="name" class="block text-gray-700 mb-2">How many inhabitants are in the area?				</label>
    <input
      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " onChange={formik.handleChange}
      value={formik.values.context2}
     
      id="c1"
      name="context2"
      type="text"
    
    />
    
  </div>
</div>}
      {option2Checked && <div class="w-85 mx-20" >

              
<div class=" h-10 w-full min-w-[200px] mb-3">
<label for="name" class="block text-gray-700 mb-2">What is the average extension of the area to be served by the service (km2 or mi2)?			</label>
<input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context1}
   
    id="c1"
    name="context1"
    type="text"
  
  />		
  
</div>
<br/>

<div class=" h-10 w-full min-w-[200px] mb-3">
  <label for="name" class="block text-gray-700  mb-2">How many workers and consumers are in the area?	</label>
  <input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context2}
   
    id="c1"
    name="context2"
    type="text"
  
  />
  
</div>
</div>}
      {option3Checked && <div class="w-85 mx-20" >

              
<div class=" h-10 w-full min-w-[200px] mb-3">
<label for="name" class="block text-gray-700  mb-2">What is the average extension of the area to be served by the service (km2 or mi2)?			</label>
<input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context1}
   
    id="c1"
    name="context1"
    type="text"
  
  />		
  
</div>
<br/>

<div class=" h-10 w-full min-w-[200px] mb-3">
  <label for="name" class="block text-gray-700  mb-2">How many workers are in the area?				</label>
  <input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context2}
   
    id="c1"
    name="context2"
    type="text"
  
  />
  
</div>
</div>}
      {option4Checked && <div class="w-85 mx-20" >

              
<div class=" h-10 w-full min-w-[200px] mb-3">
<label for="name" class="block text-gray-700  mb-2">What is the average extension of the area to be served by the service (km2 or mi2)?			</label>
<input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context1}
   
    id="c1"
    name="context1"
    type="text"
  
  />		
  
</div>
<br/>

<div class=" h-10 w-full min-w-[200px] mb-3">
  <label for="name" class="block text-gray-700  mb-2">How many tourists are in the area?				</label>
  <input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context2}
   
    id="c1"
    name="context2"
    type="text"
  
  />
  
</div>
</div>}
      {option5Checked && <div class="w-85 mx-20" >

              
<div class=" h-10 w-full min-w-[200px] mb-3">
<label for="name" class="block text-gray-700  mb-2">What is the average extension of the area to be served by the service (km2 or mi2)?			</label>
<input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context1}
   
    id="c1"
    name="context1"
    type="text"
  
  />		
  
</div>
<br/>

<div class=" h-10 w-full min-w-[200px] mb-3">
  <label for="name" class="block text-gray-700  mb-2">How many inhabitants, workers, consumers, tourists are in the area?				</label>
  <input
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" " onChange={formik.handleChange}
    value={formik.values.context2}
   
    id="c1"
    name="context2"
    type="text"
  
  />
  
</div>
</div>}
            
           
            </div>



            
            {/* <TextInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password && errors.password}
              success={!errors.password && touched.password ? "Valid" : ""}
            /> */}

            {/* <div style={{ marginBottom: "30px", width: "100%" }}>
              <Checkbox
                checked={values.checked}
                onChange={() => setFieldValue("checked", !values.checked)}
                color="lightBlue"
                text="Remember Me"
                id="checkbox"
              />
            </div> */}
            <br/>

            <div style={{ marginBottom: "30px", width: "100%" }}>
            <Link to='/FleetSizeDataEntry'
      ><Button
      type="submit" >
      next
    </Button></Link>
              
            </div>
          
        {/* </form>
      )}
    </Formik> */}
    </form>
    </div>
    
  );
};

export default ContextctualizationComponent;
