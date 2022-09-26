import React from "react";
import { useEffect, useState } from "react";
import { FetchAllReviews } from "./Api";
import '../StyleSheets/GetAllReviews.css'

const GetAllReviews = () => {

    const [reviews, setReviews] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        FetchAllReviews()
        .then((data) => {
            setIsLoading(false)
            setReviews(data.reviews)
            
        
        })
    })

    if(loading){
        return (
            <p className="loading"> im loading pls wait </p>
        )
    }
    return (
        <div className="allreviewscontainer">
            <ul className="allreviewslist">
                {reviews.map((review, index) => {
                    return <li className="allreviewslistitems" key={index}> {review.title} </li>
                })}
            </ul>

        </div>
    )
}

export default GetAllReviews