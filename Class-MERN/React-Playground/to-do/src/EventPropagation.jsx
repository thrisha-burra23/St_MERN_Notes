import React from 'react'

const EventPropagation = () => {
  return (
    <div onClick={()=>alert("div clicked")}>
       
        <button onClick={(e)=>{alert ("button clicked")
            e.stopPropagation();
        }}>
            child button
        </button>
    </div>
  )
}

export default EventPropagation