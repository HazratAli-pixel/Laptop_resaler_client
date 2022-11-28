import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({ card }) => {
    const { name, iconlink, bgClass } = card;
    return (
        <div >
            <Link to={`/category/${name}`} params={{"category": name}} className={`card text-white p-2 md:card-side shadow-xl ${bgClass}`}>
                <figure>
                    <img src={iconlink} className='rounded-full'  alt="" style={{height:'80px'}}/>
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-black font-bold">{name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default InfoCard;