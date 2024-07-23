import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar';


function App() {
  const[value, setValue]=useState(0);
  const[success,setSuccess]=useState(false);

  useEffect(()=>{
    setInterval(() => {
      setValue((val)=> val+0.1);
    },250);
  })
  return (
    <>
    <div className='main'>
      <span>Progress bar</span>
      <ProgressBar value={value} onComplete={()=> setSuccess(true)} />
        <span>{success ? "Complete":"Loading.."}</span>
    </div>
    
    </>
  );
}

export default App;