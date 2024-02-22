import React, { useEffect } from 'react'
import NoteGroup from '../NoteGroup/NoteGroup'
import style from "./NoteContainer.module.css"
import Button from '../Button/Button'
import { useSelector } from 'react-redux'
import useData from '../../utils/useData'



const NoteContainer = () => {
    const note = useSelector(store => store.note);
    
    useData(); 

  return (

    <>
    <div className={style.container}>   
    {console.log(note.showInput)}
    
    {
      
      note.data.map((group,index)=>(
            <NoteGroup key={index} index={index} group={group}/>
      ))
    }

        
    </div>
    </>
  )
}

export default NoteContainer