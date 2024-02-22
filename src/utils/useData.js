
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { fetchData } from './noteSlice';

const useData = () => {
    const note = useSelector(store => store.note);
    const dispatch = useDispatch();

    
  
    useEffect(()=> {
        const data = JSON.parse(localStorage.getItem("groups")) || [];
        dispatch(fetchData(data));
    },[note.showInput]);
}

export default useData