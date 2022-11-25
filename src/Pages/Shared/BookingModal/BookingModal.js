import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ modalstatus, setamodalstatus, product, refetch }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const {name, description , img} = product;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        setamodalstatus(null);
        // [3, 4, 5].map((value, i) => console.log(value))
        // const booking = {
        //     appointmentDate: date,
        //     treatment: treatmentName,
        //     patient: name,
        //     slot,
        //     email,
        //     phone,
        //     price
        // }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        // fetch('https://doctors-portal-server-rust.vercel.app/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             setTreatment(null);
        //             toast.success('Booking confirmed');
        //             refetch();
        //         }
        //         else{
        //             toast.error(data.message);
        //         }
        //     })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure>
                        <img src={img} alt="" className='rounded-lg' />
                    </figure>
                    <h3 className="text-lg font-bold p-2"><strong>Name: </strong> {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2'>
                        <input type="text" disabled  defaultValue={'1200'} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <textarea defaultValue={''} placeholder='Address' className="input w-full input-bordered "></textarea>
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;