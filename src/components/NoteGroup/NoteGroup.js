import { useState } from 'react'
import React, { useContext } from 'react'
import style from './NoteGroup.module.css'
import { setClickedIndex } from '../../utils/noteSlice'
import { useSelector, useDispatch } from 'react-redux'

const NoteGroup = (props) => {
  
  const note = useSelector(store => store.note);
  const dispatch = useDispatch();
  const capitalizeFirstLetter = (word) => {
    // console.log(word)
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


  return (
    <div>
     
    <div  className={`${style.wrap} ${style.pointer} ${style.flex} ${style.itemCenter} ${style.noteText} ${note.clickedIndex === props.index ? style.bgGray : ""}`} onClick={() => dispatch(setClickedIndex(props.index))}>
      <div className={`${style.noteHeading} ${style.flexCircle}`} style={{backgroundColor:props.group.groupColor}}>
      {capitalizeFirstLetter(
                props.group.groupName
                  .split(" ")
                  .map((word) => word.charAt(0))
                  .join("")
                  .substring(0, 2)
              )}
      </div>
        <div>
        {capitalizeFirstLetter(props.group.groupName)}
        </div>
      </div>
      
    </div> 
  )
}

export default NoteGroup