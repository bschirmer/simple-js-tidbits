import React, { Component} from "react";
import { Button } from '@material-ui/core';

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    
    componentDidMount(){
        const buttons = document.querySelectorAll(".btn");
    
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                let currentCount = this.state.count;
                const styles = btn.classList;
                if(styles.contains("decrease")){
                    currentCount--;
                    this.setState({count: currentCount});
                }
                else if(styles.contains('reset')){
                    currentCount = 0;
                    this.setState({count: currentCount});
                }
                else if(styles.contains('increase')){
                    currentCount++;
                    this.setState({count: currentCount});
                }

                let counterTidbit = document.querySelector(".counter");

                if(currentCount < 0 ){
                    counterTidbit.style.backgroundColor = "red";
                } else if(currentCount > 0){
                    counterTidbit.style.backgroundColor = "green";
                } else{
                    counterTidbit.style.backgroundColor = "white";
                } 
            });
        })
    }

    render(){
        return(
        <div className="counter">
            <span className="title"> Counter </span>
            <div>
                <span id="count">{this.state.count}</span>
                <div className="btn-container">
                    <Button className="btn decrease">-1</Button>
                    <Button className="btn reset">reset</Button>
                    <Button className="btn increase">+1</Button>
                </div>
            </div>
        </div>
        );
    };
}

export default Counter;