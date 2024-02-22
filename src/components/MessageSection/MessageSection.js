import React, { useEffect, useState } from 'react'
import style from './MessageSection.module.css'
import { useSelector } from 'react-redux';
import NoteGroup from '../NoteGroup/NoteGroup';
import Message from '../Message/Message';



const MessageSection = () => {
  const note = useSelector(store => store.note);
  const [textArea, setTextArea] = useState("");
  const [msgs, setMsgs] = useState([]);
  
  useEffect( ()=> {
    const listMsgs = JSON.parse(localStorage.getItem(`${groupName}-messages`))|| [];

    setMsgs(listMsgs);
  },[note.clickedIndex])
  
  
  let index = Number(note.clickedIndex);
  const capitalizeFirstLetter =  (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const data = JSON.parse(localStorage.getItem("groups")) || [];

  const groupName = capitalizeFirstLetter(data[index].groupName);


   

 const handleSubmit = (e) => {
 
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const formattedTime = currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })

    e.preventDefault();

    if(textArea.trim() !== "") {
        const newMsg = {
          text: textArea,
          date: formattedDate,
          time:formattedTime,
        };

        setMsgs([...msgs, newMsg]);

        localStorage.setItem(
          `${groupName}-messages`,
          JSON.stringify([...msgs, newMsg])
        );

        setTextArea("");
    }


  }
  


  return (
    <div>
        <div className={`${style.width100} ${style.height4rem}` } style={{backgroundColor:'#001F8B'}} >
        <NoteGroup  index={note.clickedIndex} group={note.data[note.clickedIndex]} />
        </div>
        <div className={`${style.messageArea} ${style.width100} ${style.height60vh}`}>
            <Message messages={msgs} />
        </div>
        <div className={`${style.textAreaSection} ${style.height10rem} ${style.width100} ${style.setPadding}`} style={{backgroundColor:'#001F8B'}}>
            <form onSubmit={handleSubmit}>
                <label >
                    <textarea className={` ${style.width90} ${style.setPadding}`} name="textArea" value={textArea} onChange={(e) => setTextArea(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Enter your text here...........'>
                    </textarea>
                </label>
                <button type='submit' onClick={handleSubmit} >
                    submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default MessageSection