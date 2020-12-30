import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { inc, dec } from '../redux/actions/counter';

const Content = () => {
    const dispatch = useDispatch()
    return(
        <>
            <center><h1>Redux using @reduxjs/toolkit</h1>
            <br />
            <h3>Count is {useSelector(state => state.counter.number)}</h3>
            <button onClick={() => dispatch(inc())}>Increment</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch(dec())}>Decrement</button>
            </center>
        </>
    )
}

export default Content;