import React from 'react'
import style from './Button.module.css'
import { useDispatch } from 'react-redux'
import { toggleTrue } from '../../utils/noteSlice';

const Button = () => {
    const dispatch = useDispatch();

  const onhandleClick = () => {
      dispatch(toggleTrue());   
  }
  
  
  return (
    <div >
        <button className={`${style.btn}`} onClick={onhandleClick}>
            +
        </button>
        
    </div>
  )
}

export default Button