import React from "react";
import '../style.css'
import locmark from '../images/point.png'


function Card(props)
{
    return(
        <div className="card-section">
            
            <div className="image-column">
                <img src={`${process.env.PUBLIC_URL}/images/${props.imageUrl}`} alt='location'></img>
            </div>
            
            <div className="info-column">
                
                <div className="line-one">
                    
                    <img src={locmark} alt="location drop png"></img>
                    <div className="country">
                        {props.location}
                    </div>
                    
                    <div className="location">
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                
                </div>
                
                <div className="line-two">
                    
                    <div className="title">{props.title}</div>
                
                </div>
                
                <div className="line-three">
                    
                    <div className="date-range"><b>{props.startDate} - {props.endDate}</b></div>
                
                </div>
                
                <div className="line-four">
                    
                    <div className="description">{props.description}</div>
                
                </div>
            
            </div>
        </div>
    )
}

export default Card