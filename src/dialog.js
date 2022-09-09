import React from 'react'

function dialog({message, onDialog}) {
  return (
    <div style={{
        position:"fixed",
        top:'0',
        left:'0',
        right:'0',
        bottom:"0",
        background:'rgba(0,0,0,0.5)'
    }}>
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        background:"white",
        padding:'50%'
      }}>
        <h3 style={{color:'#111'}}>{message}</h3>
        <div style={{display:'flex',alignItems:'center'}}></div>
        <button onClick={()=>onDialog(true)} style={{background:'red',color:'white'  , padding:"10%",marginLeft:'4px',border:'none' ,cursor:'pointer'}}>YES</button>
        <button onClick={()=>onDialog(false)} style={{background:'green',color:'white', padding:"10%",marginRight:'4px',border:'none',cursor:'pointer'}}>NO</button>
      </div>
    </div>
  )
}

export default dialog
