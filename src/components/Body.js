import React,{Component} from 'react'

function Body(props){
  return(
    <div className="content">
      <input type="text" value={props.task}/>
      <button name={props.id}>x</button>
    </div>
  )
}



export default Body