import AppHeading from "./components/AppHeading/AppHeading";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import style from "./App.module.css"
import { useSelector } from "react-redux";
import Button from "./components/Button/Button"
import Model from "./components/Model/Model";
import HeroSection from "./components/HeroSection/HeroSection";
import MessageSection from "./components/MessageSection/MessageSection";


function App() {
  const note = useSelector(store => store.note);

  return (
    <div className={`${style.flex} ${style.width100} ${style.itemCenter} ${style.justifySpaceBetween}} ${style.height100}`}>
      <div className={`${style.width30}`}>
        <AppHeading/>
        <NoteContainer/>
        <Button />
        
      </div>
      {note.showInput && <Model/>}
      {(note.clickedIndex==-1) ? 
      <div className={`${style.width70} ${style.height100} ${style.flex} ${style.itemCenter} ${style.justifyCenter}` } style={{ backgroundColor:'#DAE5F5' }} >
          <HeroSection />     
      </div> : 
      <div className={`${style.height100} ${style.width70}`}>
        <MessageSection/>
      </div>}
      
    </div>
  );
}

export default App;
