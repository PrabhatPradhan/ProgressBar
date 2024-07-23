import React, { useEffect, useState } from 'react'
import './progres.css'
import {MAX,MIN} from './Constent'


export default function ProgressBar({value=0,onComplete= ()=>{}}) {

  const[percent,setPercent]=useState(value);
  // const[isComplete,setIsComplete]=useState(false);
  useEffect(()=>{
   setPercent(Math.min(Math.max(value,MIN),MAX));
   if(value>=MAX){
    onComplete();
   }

  },[value])
  return (

<div className="progres-contenar">
    
    <span
      style={{
         
        color: percent > 49 ? "blue" : "black"
      }}
    >
      {percent.toFixed()}%
    </span>
    <div 
      style={{
          color:"white",
          height:'100%',
        transform: `scaleX(${percent / MAX})`,
        transformOrigin: "left"
      }}
      aria-valuemin={MIN}
      aria-valuemax={MAX}
      aria-valuenow={percent}
      role="progressbar"
    />
    </div>
  )
}

