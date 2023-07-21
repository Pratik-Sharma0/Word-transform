// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import { useState } from "react";


function App() {
  const [mode,setMode] = useState('light');
 const toggleMode=()=>{
 if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743';
 }
 else{
  setMode('light');
  document.body.style.backgroundColor="white";
 }
  }
  return (
<div>
  <Navbar title="Word-Transform" mode={mode} toggleMode={toggleMode}/>
  <div className="container">
  <Textarea heading="Enter the text to analyze below" mode={mode}/>
  {/* <About/> */}
  </div>
  
</div>
  );
}

export default App;
