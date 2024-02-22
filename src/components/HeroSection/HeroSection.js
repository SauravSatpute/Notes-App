import React from 'react'
import style from './HeroSection.module.css'

const HeroSection = () => {
  return (
    
        <div className={`${style.heroContainer} ${style.flex} ${style.alignCenter} ${style.justifyCenter} ${style.width8rem}`} >
            <div className={`${style.heroImg}`}>
                <img src="heroImg.png" alt="" />
            </div>

            <div className={`${style.text} ${style.textCenter} ${style.textBold}` }>
            <h1>Pocket Notes</h1>
            Send and receive messages without keeping your phone online.<br/>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
        </div>
    
  )
}

export default HeroSection