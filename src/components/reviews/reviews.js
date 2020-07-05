import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import reviewsData from "./reviewsData";

const Reviews = () => {

    const [reviewNumber, setReviewNumber] = useState(0);
    const [review, setReview] = useState({image: reviewsData[0].img,
                                         author: reviewsData[0].author, 
                                         job: reviewsData[0].job,
                                         info: reviewsData[0].text});

    function prevReview() {
        reviewNumber - 1 < 0 ? setReviewNumber(reviewsData.length - 1) : setReviewNumber(reviewNumber - 1);
    }

    function nextReview() {
        reviewNumber + 1 > reviewsData.length - 1 ? setReviewNumber(0) : setReviewNumber(reviewNumber + 1);
    }

    function shuffle() {
        setReviewNumber(Math.floor(Math.random()*reviewsData.length));
    }

    useEffect(() => {
        setReview({ image: reviewsData[reviewNumber].img,
                    author: reviewsData[reviewNumber].author, 
                    job: reviewsData[reviewNumber].job,
                    info: reviewsData[reviewNumber].text});
    }, [reviewNumber]);

    return(
        <main>
            <div className="reviews">
                <div className="title"> 
                    Reviews
                    <span className="underline"></span>
                </div>
                <article  className="review">
                    <div className="img-container">
                        <img src={review.image} id="review-image"/>
                    </div>
                    <h4 id="author">{review.author}</h4>
                    <p id="job">{review.job}</p>
                    <p id="info">{review.info}</p>
                </article >
                <div>
                    <Button className="prev" onClick={() => prevReview()}><FontAwesomeIcon icon={faArrowLeft}/></Button>
                    <Button className="next" onClick={() => nextReview()}><FontAwesomeIcon icon={faArrowRight}/></Button>
                </div>
                <Button className="shuffle" onClick={() => shuffle()}>I'm feelin' lucky</Button>
            </div>
        </main>
    );
}

export default Reviews;