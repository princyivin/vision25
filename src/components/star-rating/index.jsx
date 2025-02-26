import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import './styles.css';

export default function StarRating({noOfStars=0}){


    const [rating, setRating]= useState(0);
    const [hover, setHover]= useState(0);

        function handleClick(getCurrentIndex){
            setRating(getCurrentIndex);
            console.log(getCurrentIndex);
            

        }
        function handleMouseEnter(getCurrentIndex){
            setHover(getCurrentIndex)

        }
        function handleMouseLeave(getCurrentIndex){
            setHover(rating)

        }

        return <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index += 1
                    return <FaStar 
                    key ={index}
                    
                    className={index <=( hover|| rating) ? 'active': 'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                    />

                })

                
            }


        </div>
}