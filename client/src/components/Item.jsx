import React, { useState } from "react";
import { XCircle } from 'react-bootstrap-icons';


function Item(props,  {allSteps,  allAffirmations, allGratitudes, containerId}) {

  
  const [toggle, setToggle] = useState(true);
  const [newText, setNewText] = useState(props.text);
  


  function toggleInput() {
    setToggle(false);
  }

  function handleChange(event) {
    setNewText(event.target.value);
   
    
  } 

  
  return (

    <div>
      <li className = "bulletpoints">
      
      {toggle? (
      <p className = "separator" onDoubleClick = {toggleInput}>
      {newText}
      </p>): (

        <input  className = "editing_input" type = "text" value = {newText}  onChange = {handleChange}
        onKeyDown={(event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setToggle(true);
      if (props.containerId === "steps") {
        props.updateStep(props.id, newText);
      } else if (props.containerId === "gratitudes") {
        props.updateGratitude(props.id, newText);
      } else  {
        props.updateAffirmation(props.id, newText);
      }
      event.preventDefault()
      event.stopPropagation()
    }
  }}
        />
        
      )}

      
      <button 
            onClick={() => {
              if (props.containerId === "steps") {
                props.deleteStep(props.id, props.containerId);
      } else if (props.containerId === "gratitudes") {
        props.deleteGratitude(props.id, props.containerId);
      } else  {
        props.deleteAffirmation(props.id, props.containerId);
      }
   
      }}
      
      ><XCircle /></button>
    
      </li>
      
      
    </div>

  );
}

export default Item;
