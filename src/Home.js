import React from 'react';
import centraleLyon from './logos/centraleLyonLogo.png';
import { Link } from 'react-router-dom';
import ContextctualizationComponent from './ContextctualizationComponent';

const Home = () => {
    

    return <div className='h-screen flex flex-wrap items-center justify-center ' >
            <div className='grid grid-cols-2 gap-2"'>
                <div className='container mx-auto p-2'>

                
                <img src={centraleLyon} alt='Centrale_Lyon_Logo' className=''></img>
                </div>
                <div className='flex flex-col justify-center'>
                <p className='p-5'> 
                The EASI-Transport calculation tool was designed with the objective 
                of helping policy makers in cities, regions, Public Transport Operators
                 (PTOs), and others interested stakeholders that may wish to implement services 
                 with Autonomous Vehicles for collective transport (e.g.: private corporate sites
                  or university/hospital campuses).													

                </p>

                <p>  Composed of independent but complementary analysis, the tool can provide decision-makers with:								
                    A fleet size dimensioning tool								
                Comparative service cost analysis								
                Comparative external cost analysis								
                Total cost of the service								
            Comparative revenue analysis								
                    Net present value calculation.								
                </p>
                <Link to="/ContextctualizationComponent"> <button class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-1 rounded-full mt-5 mx-20">Start the simulation 
</button></Link>
               


  
                </div>
            </div>



      
    </div>
  }


export default Home;