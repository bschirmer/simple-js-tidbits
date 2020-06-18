import React, { Component} from "react";
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import reviewsData from "../resources/reviewsData";

class Reviews extends Component{
    constructor(){
        super();

        this.state = {
            author: reviewsData[0].name,
            job: reviewsData[0].job,
            info: reviewsData[0].img,
            image: reviewsData[0].text,
            index: 0
        }
    }    

    componentDidMount(){
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        const shuffleBtn = document.querySelector(".shuffle");

        prevBtn.addEventListener('click', () => {
            let i = this.state.index;
            if(i == 0) 
                i = 3;
            else 
                i--;
            
            this.setState({index: i});
            this.setState({author: reviewsData[i].name});
            this.setState({job: reviewsData[i].job});
            this.setState({image: reviewsData[i].img});
            this.setState({info: reviewsData[i].text});
        });

        nextBtn.addEventListener('click', () => {
            let i = this.state.index;
            if(i == 3) 
                i = 0;
            else 
                i++;
            
            this.setState({index: i});
            this.setState({author: reviewsData[i].name});
            this.setState({job: reviewsData[i].job});
            this.setState({image: reviewsData[i].img});
            this.setState({info: reviewsData[i].text});
        });

        shuffleBtn.addEventListener('click', () => {
            let i = Math.floor(Math.random()*reviewsData.length)
            
            this.setState({index: i});
            this.setState({author: reviewsData[i].name});
            this.setState({job: reviewsData[i].job});
            this.setState({image: reviewsData[i].img});
            this.setState({info: reviewsData[i].text});
        });


    }

    render(){
        return(
            <main>
                <div className="reviews">
                    <div className="title"> 
                        Reviews
                        <span className="underline"></span>
                    </div>
                    <article  className="review">
                        <div className="img-container">
                            <img src={this.state.image} id="review-image"/>
                        </div>
                        <h4 id="author">{this.state.author}</h4>
                        <p id="job">{this.state.job}</p>
                        <p id="info">{this.state.info}</p>
                    </article >
                    <div>
                        <Button className="prev"><FontAwesomeIcon icon={faArrowLeft}/></Button>
                        <Button className="next"><FontAwesomeIcon icon={faArrowRight}/></Button>
                    </div>
                    <Button className="shuffle">I'm feelin' lucky</Button>
                </div>
            </main>
        );
    };
}

export default Reviews;