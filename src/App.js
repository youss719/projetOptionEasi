import logo from './logo.svg';
import './App.css';
import FirstForm from './FirstForm';
import Home from './Home';
import Header from './Header';
import ContextualizationComponent from './ContextctualizationComponent';
import FleetSizeDataEntry from './FleetSizeDataEntry';
import FleetSizeDataResults from './FleetSizeDataResults';
import TextInput from './TextInput';
import TestForm from './TestForm';
import ContextctualizationComponent from './ContextctualizationComponent';
import FormikForm from './Form';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Header/>
    <Routes>

    <Route path="/"  element={<Home/>}/>
    <Route path="/ContextctualizationComponent"  element={<ContextctualizationComponent/>}/>
    <Route path="/FleetSizeDataEntry"  element={<FleetSizeDataEntry/>}/>
    <Route path="/FleetSizeDataResults"  element={<FleetSizeDataResults/>}/>
    <Route path="/thirdpage"  element={<FormikForm/>}/>

    </Routes>
   
     


      

      
    </div>
  );
}

export default App;
