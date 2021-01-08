import React, {useState} from 'react';

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import {backendUrl} from "../config";

//Modal is used to have a pop-up box
//Form.Group controlId= is used for accessibility apparently https://react-bootstrap.github.io/components/forms/

const AddMedication = (props) => {
    // const [medicationName, setMedicationName] = useState("");
    // const [prescriptionCount, setPrescriptionCount] = useState("");
    // const [description, setDescription] = useState("");
    // const [medicationClass, setMedicationClass] = useState("");
    // const [dosage, setDosage] = useState("");
    // const [pharmacyName, setPharmacyName] = useState("");

//     const submit = e => {
//         e.preventDefault();
//         const data = {name: medicationName, prescriptionCount, description, medicationClass, dosage, pharmacyName}
//         console.log(data);
//         // fetch(`${backendUrl}/medication`, {method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json"}});
//         // props.handleSubmission();
//     }

//     return (
//         <Modal show={props.show} onHide={props.handleClose}>
//             <Modal.Header><Modal.Title>Add Medciation</Modal.Title></Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="formAddMedicationName">
//                         <Form.Label>Medication Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter medication name"
//                                       onChange={e => setMedicationName(e.target.value)} value={medicationName} />
//                     </Form.Group>
//                     <Form.Group controlId="formAddPrescriptionCount">
//                         <Form.Label>Prescription Count</Form.Label>
//                         <Form.Control type="number" placeholder="Enter number of tablets"
//                                       onChange={e => setPrescriptionCount(e.target.value)} value={prescriptionCount}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="formDescription">
//                         <Form.Label>Description</Form.Label>
//                         <Form.Control type="text" placeholder="Enter description"
//                                       onChange={e => setDescription(e.target.value)} value={description}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="formMedicationClass">
//                         <Form.Label>Medication Class</Form.Label>
//                         <Form.Control type="text" placeholder="Enter medication class"
//                                       onChange={e => setMedicationClass(e.target.value)} value={medicationClass}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="formDosage">
//                         <Form.Label>Dosage</Form.Label>
//                         <Form.Control type="text" placeholder="Enter dosage"
//                                       onChange={e => setDosage(e.target.value)} value={dosage}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="formPharmacyName">
//                         <Form.Label>Pharmacy Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter Pharmacy Name"
//                                       onChange={e => setPharmacyName(e.target.value)} value={pharmacyName}
//                         />
//                     </Form.Group>
//                     <Button variant="primary" onClick={e => submit(e)}>
//                         Add new medication
//                     </Button>
//                 </Form>
//             </Modal.Body>
//         </Modal>
//     );
}

export default AddMedication;
