import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Audit.css';
import ReactDOM from 'react-dom'

class Audit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        dayCount: '', 
        eveningCount: '', 
        staffId: '',
        initialMedicationCount: ''};

        this.create = this.create.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
        
  }
  

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }


//   componentDidMount() {
//     // get all entities - GET
//     fetch("http://localhost:8080", {
//   "method": "GET",
//   "headers": {
//     'Content-Type': 'application/json',
//   }
// })
// .then(response => response.json())
// .then(response => {
//   this.setState({
//     audits: response
//   })
// })
// .catch(err => { console.log(err); 
// });

//   }

create(e) {
    // add entity - POST
    fetch("http://localhost:8080/addAudit", {
    "method": "POST",
    "headers": {
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    name: this.state.name,
    dayCount: this.state.dayCount,
    eveningCount: this.state.eveningCount,
    initialMedicationCount: this.state.initialMedicationCount,
    staffId: this.state.staffId
  })

})

.then(response => response.json())
.then(response => {
  console.log(response)
})
.catch(error => {
  console.log(error);
});

    e.preventDefault();
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label className="input-group-text">Resident Name </label>
        <input className="form-control form-control-lg" placeholder="enter resident name"
        type ="text" name="name" onChange={this.inputChanged}
        value={this.state.firstName}/><br/>

        <label className="input-group-text">Day Count </label>
        <input className="form-control form-control-lg" placeholder="enter medication intake"
        type ="number" name="dayCount" onChange={this.inputChanged}
        value={this.state.dayCount}/><br/>

        <label className="input-group-text">Evening Count </label>
        <input className="form-control form-control-lg" placeholder="enter medication intake"
        type ="number" name="eveningCount" onChange={this.inputChanged}
        value={this.state.eveningCount}/><br/>

        <label className="input-group-text">Initial Medication Count </label>
        <input className="form-control form-control-lg" placeholder="enter intial prescription count"
        type ="number" name="initialMedicationCount" onChange={this.inputChanged}
        value={this.state.initialMedicationCount}/><br/>

        <label className="input-group-text">Staff Id </label>
        <input className="form-control form-control-lg" placeholder="enter staff ID"
        type ="text" name="staffId" onChange={this.inputChanged}
          value={this.state.staffId}/><br/>

        <input type="submit" value="Submit Audit"/>
      </form>
    );
  } 
}
//let domContainer = document.querySelector('#App');
 //ReactDOM.render(<Audit />, domContainer);
export default Audit;
