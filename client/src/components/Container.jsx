import React, { useState } from "react";
import Item from "./Item";
import Axios from "axios";




const API_BASE = "http://localhost:3001";


function Container({heading, onAdd, placeholder, data, allSteps, delSteps, allAffirmations,
  delAff, allGratitudes, delGrat, containerId}) {
  

  const [inputText, setInputText] = useState("");

  

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);

  }



const updateGratitude = async (id, newText) => {
  const data = await Axios.put(API_BASE + "/gratitude/update/" + id ,{
    gratitude: newText
}).then(res => res.data)
      //Find index of specific object using findIndex method.    
      const objIndex = allGratitudes.findIndex((obj => obj._id === id));
      //Update object's name property.
      allGratitudes[objIndex].gratitude = data.gratitude;
}


const updateAffirmation = async (id, newText) => {
  const data = await Axios.put(API_BASE + "/affirmation/update/" + id ,{
    affirmation: newText
}).then(res => res.data)
      //Find index of specific object using findIndex method.    
      const objIndex = allAffirmations.findIndex((obj => obj._id === id));
      //Update object's name property.
      allAffirmations[objIndex].affirmation = data.affirmation;
}

const updateStep = async (id, newText) => {
  const data = await Axios.put(API_BASE + "/step/update/" + id ,{
    step: newText
}).then(res => res.data)
      //Find index of specific object using findIndex method.    
      const objIndex = allSteps.findIndex((obj => obj._id === id));
      //Update object's name property.
      allSteps[objIndex].step = data.step;
}


// Deletion functions:




  // const deleteGratitude = async (id) => {
  //   const data = await fetch (API_BASE + "/gratitude/delete/" + id , {
  //      method: "DELETE"
  //     }).then(res =>  res.json());
  
  //     delGrat(allGratitudes => allGratitudes.filter(gratitude => gratitude._id !== data._id));
    
  // };


  const deleteGratitude = async (id) => {
    const data = await Axios.delete(API_BASE + "/gratitude/delete/" + id).then(res => res.data);
  
      delGrat(allGratitudes => allGratitudes.filter(gratitude => gratitude._id !== data._id));
    
  };

  

  const deleteAffirmation = async (id) => {
    const data = await Axios.delete(API_BASE + "/affirmation/delete/" + id).then(res => res.data);
  
      delAff(allAffirmations => allAffirmations.filter(affirmation => affirmation._id !== data._id));
  
  };
  
  
  const deleteStep = async (id) => {
    const data = await Axios.delete(API_BASE + "/step/delete/" + id).then(res => res.data);
      
    delSteps(allSteps => allSteps.filter(step => step._id !== data._id));


  };
  


    return (
    <div className="container_home">
    <div className="heading">
      <h1>{heading}</h1>
    </div>
    <div className="form">
    <form onSubmit = {(e) => {
          e.preventDefault();
          onAdd(inputText);
          setInputText("");
        }}>
      <input className="container"  onChange={handleChange} type="text" value={inputText}  placeholder={placeholder} />
      <button 
      // onClick={() => {
      //     onAdd(inputText);
      //     setInputText("");
      //   }} 
        type="submit" 
        id = 'btn'
        >
        {/* <span>Add</span> */}
      </button>
      </form>
    </div>
    <div>
   
      <ul >
      {data.map((d, index) => (

       <Item
          key={d.id}
          id={d.id}
          text={d.text}
          containerId = {containerId}
          deleteGratitude = {deleteGratitude}
          deleteAffirmation = {deleteAffirmation}
          deleteStep = {deleteStep}
          updateGratitude = {updateGratitude}
          updateAffirmation = {updateAffirmation}
          updateStep = {updateStep}
        /> 
        
  
 
      ))}
      
      

        
      </ul>
    </div>
  </div>
    );
}


export default Container;