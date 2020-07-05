import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let counterTidbit = document.querySelector(".counter");

        if(count < 0){
            counterTidbit.style.backgroundColor = "red";
        } else if(count > 0){
            counterTidbit.style.backgroundColor = "green";
        } else{
            counterTidbit.style.backgroundColor = "white";
        } 
    });

    return(
        <div className="counter">
            <span className="title"> Counter </span>
            <div>
                <span id="count">{count}</span>
                <div className="btn-container">
                    <Button onClick={() => setCount(count - 1)}>-1</Button>
                    <Button onClick={() => setCount(0)}>reset</Button>
                    <Button onClick={() => setCount(count + 1)}>+1</Button>
                </div>
            </div>
        </div>
        );
}

export default Counter;