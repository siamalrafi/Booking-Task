import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookingCart = ({ seat, refetch }) => {
    const [modal, setModal] = useState(null);

    return (
        <div>
            <div className="card w-52 shadow-xl image-full">
                <div className="card-body">
                    <h2 className="card-title">Seat NO {seat.seat}</h2>
                    <div className="card-actions justify-end">
                        {seat.book ? <h1 className='text-white'>Booked</h1> : <label htmlFor="my-modal" className="btn btn-outline text-black bg-[#B7C9BE]" onClick={() => setModal(seat)}> BOOk</label>}
                    </div>
                </div>
            </div>

            {
                modal && <BookingModal modal={modal}
                    setModal={setModal} refetch={refetch}></BookingModal>
            }
        </div >
    );
};

export default BookingCart;