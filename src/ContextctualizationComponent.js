import React from "react";
import * as Yup from "yup";

//import "@material-tailwind/react/tailwind.css";


import { Formik } from "formik";

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
    
  // perform some command
  const _onSave = (values) => {
    console.log(values);
  };

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
            <Checkbox label="Residential"   onChange={() => setCheckedRes(!checkedRes)} checked={checkedRes} />
            <Checkbox label="Commercial"  />
            <Checkbox label="Industrial"  />
            <Checkbox label="Touristic" />
            <Checkbox label="Mixed"  />

            {
             checkedRes ? (
                <div class="w-85 mx-20" >
  <div class="relative h-10 w-full min-w-[200px]">
    <input
      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    What is the average extension of the area to be served by the service (km2 or mi2)?						

    </label>
    
  </div>
  <br/>

  <div class="relative h-10 w-full min-w-[200px]">
    <input
      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    How many inhabitants are in the area?						
					

    </label>
    
  </div>
</div>
               ) : (<div></div>)
           }
           
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
              <Button
                type="submit"
           
              >
                Submit
              </Button>
            </div>
          
        {/* </form>
      )}
    </Formik> */}
    </div>
  );
};

export default ContextctualizationComponent;
