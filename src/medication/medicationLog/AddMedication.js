import React, {Component} from 'react';

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class AddMedication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        medications: [],
        medicationName: '',
        prescriptionCount: '',
        description: '',
        medicationClass: '',
        dosage: '',
        pharmacyName: ''
      };
  
      this.create = this.create.bind(this);
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
      fetch("http://localhost:8080/addMedication", {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "accept": "application/json"
    },
    "body": JSON.stringify({
      medicationName: this.state.medicationName,
      prescriptionCount: this.state.prescriptionCount,
      description: this.state.description,
      medicationClass: this.state.medicationClass,
      dosage: this.state.dosage,
      pharmacyName: this.state.pharmacyName
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
  
    handleChange(changeObject) {
      this.setState(changeObject)
    }
  
    render() {
        return (
            <Modal >
                <Modal.Header><Modal.Title>Add Medciation</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formAddMedicationName">
                            <Form.Label>Medication Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter medication name"
                                        onChange={(e) => this.handleChange({ medicationName: e.target.value })} 
                                        //value={medicationName} 
                                        />
                        </Form.Group>
                        <Form.Group controlId="formAddPrescriptionCount">
                            <Form.Label>Prescription Count</Form.Label>
                            <Form.Control type="number" placeholder="Enter number of tablets"
                                        onChange={(e) => this.handleChange({prescriptionCount: e.target.value })} 
                                        //value={prescriptionCount}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description"
                                        onChange={(e) => this.handleChange({ description: e.target.value })} 
                                        //value={description}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMedicationClass">
                            <Form.Label>Medication Class</Form.Label>
                            <Form.Control type="text" placeholder="Enter medication class"
                                        onChange={(e) => this.handleChange({ medicationClass: e.target.value })} 
                                        //value={medicationClass}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDosage">
                            <Form.Label>Dosage</Form.Label>
                            <Form.Control type="text" placeholder="Enter dosage"
                                        onChange={(e) => this.handleChange({ dosage: e.target.value })} 
                                        //value={dosage}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPharmacyName">
                            <Form.Label>Pharmacy Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pharmacy Name"
                                        onChange={(e) => this.handleChange({ pharmacyName: e.target.value })} 
                                        //value={pharmacyName}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={(e) => this.create(e)}>
                            Add new medication
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default AddMedication;
