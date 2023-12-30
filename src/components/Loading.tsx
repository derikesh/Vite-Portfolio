import React from 'react'

import ghost from "../assets/images/Aniki Hamster(2).gif"

export default function Loading() {
  return (
    <div>

 <div style={{display:"flex",height:"90vh",width:"100%",alignItems:"center",justifyContent:"center"}} >
 <div style={{height:"100px",width:"100px"}} >
  <img src={ghost} alt="loading" style={{width:'100%',height:'100%'}}/>
  <div>
    loading...
  </div>
  </div>
 </div>

  

    </div>
  )
}
