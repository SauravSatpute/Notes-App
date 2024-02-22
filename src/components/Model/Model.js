import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { toggleFalse, toggleTrue } from '../../utils/noteSlice';
import style from './Model.module.css'


const Model = () => {
  const [groupValues, setGroupValues] = useState([{ groupName: "", groupColor: "" }]);
  const [borderIndex ,setBorderIndex] = useState(1);
  
    const note = useSelector(store => store.note);
    const dispatch = useDispatch();


    const toggle = () => {
        dispatch(toggleFalse());   
        // appendNoteGroup();
    }

    

    const handleNameChange = (event, index) => {
      const { name, value } = event.target;
      console.log(name + ' ' + value)
  
      setGroupValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[index] = {
          ...updatedValues[index],
          [name]: value,
        };
        return updatedValues;
      });
    };
  
    function handleColorChoice(color, index) {
      setGroupValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[index] = {
          ...updatedValues[index],
          groupColor: color,
        };
        setBorderIndex(color);
        return updatedValues;
      });
    }

    function handleSubmit(event) {
      event.preventDefault();
    
      if (groupValues.every((value) => value.groupName && value.groupColor)) {
        const prevGroup = JSON.parse(localStorage.getItem("groups")) || [];
    
        // Check if any of the group names already exist
        const existingGroupNames = prevGroup.map((group) => group.groupName);
        const newGroupNames = groupValues.map((group) => group.groupName);
    
        if (newGroupNames.some((name) => existingGroupNames.includes(name))) {
          alert("Please provide unique Group Names");
        } else {
          const updatedGroup = [...prevGroup, ...groupValues];
    
          localStorage.setItem("groups", JSON.stringify(updatedGroup));
    
          console.log("Form submitted:", groupValues);
    
          setGroupValues((prevValues) => [
            ...prevValues,
            {
              groupName: "",
              groupColor: "",
            },
          ]);
    
        dispatch(toggleFalse());   
          
        }
      } else {
        alert("Please provide both Group Name and Choose Colour");
      }
    }

  return (
    <>
    <div className={`${style.modalWrapper}`}></div>
    <div className={`${style.modalContainer}`}>
      <form onSubmit={handleSubmit}>
      <h3>Create New Group</h3>
      {groupValues.map((value, index) => (
            <div key={index} >
              <label>Group Name<input type="text" placeholder="Enter your group name" name="groupName" value={value.groupName} onChange={(event) => handleNameChange(event, index)}/></label><br />
              
              <label>
              Color: 
        <span  className={` ${style.circle} ${style.purple} ${borderIndex === "#B38BFA" ? style.borderColor: ""}`} onClick={() => handleColorChoice("#B38BFA", index)}></span>
        <span  className={` ${style.circle} ${style.pink} ${borderIndex === '#FF79F2'? style.borderColor: ""}`} onClick={() => handleColorChoice("#FF79F2", index)}></span>
        <span  className={` ${style.circle} ${style.skyBlue} ${borderIndex === '#43E6FC'? style.borderColor: ""}`} onClick={() => handleColorChoice("#43E6FC", index)}></span>
        <span  className={` ${style.circle} ${style.brown} ${borderIndex === '#F19576'? style.borderColor: ""}`} onClick={() => handleColorChoice("#F19576", index)}></span>
        <span  className={` ${style.circle} ${style.darkBlue} ${borderIndex === '#0047FF'? style.borderColor: ""}`} onClick={() => handleColorChoice("#0047FF", index)}></span>
        <span  className={` ${style.circle} ${style.blue} ${borderIndex === '#6691FF'? style.borderColor: ""}`} onClick={() => handleColorChoice("#6691FF", index)}></span>
        </label>
        
              
              
            </div>
          ))}

      <button type='submit'  className={`${style.block}`} >Create</button>
      </form> 
    </div>
       
    </>
  )
}

export default Model