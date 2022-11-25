import React from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdReport, MdVerifiedUser } from 'react-icons/md';

const DisplayProduct = ({ product, setamodalstatus }) => {
    
    const {name, description , img} = product;
    const location="Dhaka";
    const brand="HP";
    const resale_price=12000;
    const original_price=28000;
    const Negotiable=true;
    const years_of_use=24;
    const time ="14 Nov, 2022";
    const flag = true;
    const seller_name="Hazrat Ali";

    return (
        <div className="card bg-base-100 border-2 shadow-lg">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold">{name}</h2>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h2 className=""><span className='font-bold'>Brand: </span> {brand}</h2>
                    </div>
                    <div>
                        <p className='flex flex-row items-center gap-2'> <GrLocation/> { location}</p>
                    </div>
                </div>
                <p>{description.slice(0,100)}...</p>
                <p><span className='font-bold'>Sale Price:</span> {resale_price} tk {Negotiable && <span className='text-xs italic text text-slate-400'>Negotiable</span>} </p>
                <p><span className='font-bold'>Original Price:</span> {original_price}</p>
                <p><span className='font-bold'>Use Time:</span> {years_of_use} months</p>
                <p><span className='font-bold'>Post Date:</span> {time}</p>
                <p className='flex flex-row items-center gap-2'><span className='font-bold'>Saler name:</span> {seller_name} {flag && <div className='tooltip' data-tip="Verified Saler"><MdVerifiedUser/></div>}</p>
            </div>
            <div className='card-footer p-2 flex flex-row justify-between px-5 bg-slate-200 rounded-b-lg'>
                <div className='flex flex-row items-center gap-2  text-green-800'><span className='font-bold'>Wishlist </span><div className='tooltip' data-tip="Add to your wishlist for future purchase"> <BsFillBookmarkPlusFill/> </div></div>
                <div className='flex flex-row items-center gap-2 text-orange-400'>Report<div className='tooltip' data-tip="Report to admin if you found anything wrong"><MdReport/></div> </div>
                <label className="btn-info p-2 rounded-lg" htmlFor="booking-modal" onClick={()=>setamodalstatus(product)}>Book Now</label>
            </div>
            
        </div>
    );
};

export default DisplayProduct;