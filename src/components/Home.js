import { fstat } from "fs"
import React,{Component} from "react"
import data from "./data"

class Home extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        id: '2',
        task: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
   
    alert('An new task was submitted: ' + this.state.task);
    event.preventDefault();
    
  }

  handleChange(event){
    const {name, value, type} = event.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <form className="Home" onSubmit={this.handleSubmit}>
        <p>To-Do List</p>
        <h6>New task: {this.state.task}</h6>
        <label>
          <input type="text" name="task" onChange={this.handleChange}/>
          <button name="button">Add</button>
        </label>
      </form>
    )
  }
}

export default Home;
