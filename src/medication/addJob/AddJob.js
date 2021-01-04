import React from "react";
import './addJob.css';
import eqIcon from './equality-people.png'
import axios from 'axios';

export default function AddJob() {
  //Define two states
  //1. The content entered in the texbox in the form
  //2. Output to be displayed to the user
  const [content, setContent] = React.useState("");
  const [output, setOutput] = React.useState("");

  //Arrow function to handle content change
  const handleContentChange = event => setContent(event.target.value);

  //ToDo: Arrow function to handle form submission on pressing Save button
  const handleSubmit = event => {
    event.preventDefault();
    setOutput("Save button pressed.")
    //ToDo:
    //Make a POST request to /texts with the curent "content" (created with useState)
    //This is an asychronous request, so when the result
    //returns, check the response status
    //If the status is equal to 200, print: "Job ad successfully added"
    //Else print: "Job ad failed"
  };

  //ToDo: Arrow function to handle pressing the Analyze button
  const handleAnalyze = event => {
    event.preventDefault();
    setOutput("Analyze button pressed.");
    //ToDo:
    //Need to access the content state
    //Make a POST request to /analyze with the content
    //Process the returned result.
    //If the result.status 200, analyze the returned information.
    //Else print a failure message.
    //On success, the server should return: text, countFeminine, count Masculine, genderMap.
    //If countFeminine and countMasculine are both 0, print: "This job ad is neutral"
    //Else you need to go over the genderMap to decide how to highlight 
    //which word - consider using a map function for this.
  }

  return (
    <div>
      <div className="container">
        <div className="box">
          <img src={eqIcon} alt="Equality icon" className="icon" />
        </div>
        <div className="box">
          <form className="form" noValidate>
            <textarea id="ad" name="ad"
              placeholder="Paste your job ad here"
              onChange={handleContentChange} />
            <button className="button" onClick={handleAnalyze}>
              Analyze
              </button>
            <button className="button" onClick={handleSubmit}>
              Save
              </button>
          </form>
        </div>
        <div className="box">
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}