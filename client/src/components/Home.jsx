import React, { useState, useEffect } from "react";
import Header from "./Header";
import Container from "./Container";
import Axios from "axios";


document.body.style.backgroundImage = ("./IMG-1078.jpg");


const API_BASE = "http://localhost:3001";

function Home() {
  
  


  // const [dateObject, setDate] = useState([]);

  
  const [gratitudes, setGratitudes] = useState([]);
  const [affirmations, setAffirmations] = useState([]);
  const [steps, setSteps] = useState([]);

  

  useEffect(() => {

    Axios.get("http://localhost:3001/gratitudes").then((response) => {
      setGratitudes(response.data);
    });

    Axios.get("http://localhost:3001/affirmations").then((response) => {
      setAffirmations(response.data);
    });

    Axios.get("http://localhost:3001/steps").then((response) => {
      setSteps(response.data);
      }); 
    
  }, []);


//////// Create records ///////////

// Adding a gratitude record

const addGratitude =  async (inputText) => {
  const gratitude = await Axios.post(API_BASE + "/gratitude/new", {

          gratitude: inputText     
    
      }).then(res => res.data)
   
      setGratitudes((x) => {
        return [...x, gratitude];
      });
};

// Adding an affirmation record 

const addAffirmation =  async (inputText) => {
  const affirmation = await Axios.post(API_BASE + "/affirmation/new", {

          affirmation: inputText     
    
      }).then(res => res.data)
   
      setAffirmations((y) => {
        return [...y, affirmation];
      });
};

// Adding a step record 

const addStep =  async (inputText) => {
  const step = await Axios.post(API_BASE + "/step/new", {

          step: inputText     
    
      }).then(res => res.data)
   
       setSteps((z) => {
          return [...z, step];
      });
};


///////// From each record in an array create an object with two keys and values - one for the id  /////////

  const gr = gratitudes.map((i, index) => {
    
    return (
      {text:i.gratitude, id:i._id}
      
      );
  });

  const aff = affirmations.map((i, index) => {
    return (
      {text:i.affirmation, id:i._id}
      );
  });


  const st = steps.map((i, index) => {
    return (
      {text:i.step, id:i._id}
    );
  });





  
    return ( 
    <div>
   
        <Header >
        </Header>
        <div className = "containers">
        <Container
        containerId = "gratitudes"
        placeholder = "I'm greatful for ..✍🏻"
        heading = "My daily gratitudes" 
        onAdd={addGratitude}
        data = {gr}
        allGratitudes = {gratitudes}
        delGrat = {setGratitudes}
        updateGratitude = {setGratitudes}
        />
        
        
        <Container
        containerId = "affirmations"
        placeholder = "I'm ..✍🏻"
        heading = "My daily affirmations"
        onAdd={addAffirmation}
        data = {aff}
        allAffirmations = {affirmations}
        delAff = {setAffirmations}
        updateAffirmation = {setAffirmations}
        
        />

        

        <Container
        containerId = "steps"  
        heading = "Steps towards my goals"
        placeholder = "Today I will ..✍🏻"
        onAdd={addStep}
        data = {st}
        allSteps = {steps}
        delSteps = {setSteps}
        updateStep = {setSteps}

        />
        </div>
      </div>
      );


}


export default Home;