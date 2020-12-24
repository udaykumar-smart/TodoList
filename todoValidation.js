import React from 'react';
  
class todo extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
        let input = {};
        input["fullName"] = "";
        input["task"] = "";
        this.setState({input:input});

    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["fullName"]) {
        isValid = false;
        errors["fullName"] = "Please enter your name.";
      }
      if (!input["task"]) {
        isValid = false;
        errors["task"] = "Please enter your task.";
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">fullName:</label>
            <input 
              type="text" 
              name="fullName" 
              value={this.state.input.fullName}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter FullName" 
              id="fullName" />
  
              <div className="text-danger">{this.state.errors.fullName}</div>
          </div>

          <div class="form-group">
            <label for="task">Task:</label>
            <textarea 
              name="task"
              value={this.state.input.task} 
              onChange={this.handleChange}
              placeholder="Enter task"
              class="form-control" />
  
              <div className="text-danger">{this.state.errors.task}</div>
          </div>
             
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
 
export default todo;


