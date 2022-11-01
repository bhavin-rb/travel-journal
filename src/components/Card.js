import React from 'react';
import location_icon from '../images/location_icon.png';

function Card(props) {
    return (
       
            <div className="card">
                <img src={`${props.item.imageUrl}`} className="card--image" alt="card"/>
                <div className="card--text">
                    <div className="location">
                        <img src={location_icon} className="location--icon" alt="location"/>
                        <span className="country">{props.item.location}</span>
                        <a 
                            className="location--link"
                            href={`${props.item.googleMapsUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >View on Google Maps</a>
                    </div>
                    <span className="title--text">{props.item.title}</span>
                    <span className="dates">{props.item.startDate} - {props.item.endDate}</span>
                    <span className="description--text">{props.item.description}</span>
                </div>
            </div>
            
            
        
    )
}

export default Card;