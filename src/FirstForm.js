import React from 'react';
import {useFormik} from "formik";

const FirstForm = () => {
    //Formik logics 
    const formik = useFormik



    return <div className='h-screen flex items-center justify-center' >
      <form className='bg-white flex rounded-lg w-1/2 font-latoRegular'>

        <div className='flex-1 text-gray-700 p-20'> 
        <h1 className='text-3xl pd-2 font-latoBold'> hello </h1>
        
        </div>

        <div className='mt-6'> 


            <div className='pb-4'>
                <label className="block" htmlFor='name'>Name</label>
                <input type="text" name='name' placeholder='enter your name '/>

            </div>





        </div>



      </form>
    </div>
  }


export default FirstForm;