'use strict';
import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

class AuditPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audits: [],
      name: '', 
      dayCount: ''
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    dayCount: this.state.dayCount
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

  update(e) {
    // update entity - PUT
    e.preventDefault();
  }
  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }
  
  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>

                <label htmlFor="name">
                  Patient Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="dayCount">
                  Day Count:
                  <input
                    name="dayCount"
                    id="dayCount"
                    type="number"
                    className="form-control"
                    value={this.state.dayCount}
                    onChange={(e) => this.handleChange({ dayCount: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="id">
                  Friend ID:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                    Update
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                    Delete
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
// let domContainer = document.querySelector('#App');
// ReactDOM.render(<AuditPreview />, domContainer);

export default AuditPreview;