import logo from './logo.svg';
import './App.css';

import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import SiteHeader from './home/header';

import FooterMain from './home/footermain';
import Home from './home/homemain';
function App() {  
  let footer1=["Home","Questions","Articles","Tutorials"]
  let footer2=["FAQs","Help","Contact us"]
 

  return (
<>

<SiteHeader/>
<Home/>
<FooterMain footer1={footer1} footer2={footer2}/>
 </> 
  );
}

export default App;
