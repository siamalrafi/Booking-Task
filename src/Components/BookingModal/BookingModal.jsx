import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ modal, setModal, refetch }) => {
    const { seat, _id } = modal;

    const handelbook = (id) => {

        const book = {
            isBooked: true,
            bookId: id
        }

        fetch(`https://booking-task-backend.vercel.app/bookSeat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    setModal(null)
                    toast.success('Booking successfully')
                } else {
                    toast.error('This seat is already booked')
                }
            });
    }


    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> Hello User </h3>
                    <p className="py-4">Please confirm your seat for seat no : {seat}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn" onClick={() => handelbook(_id)}>Booked </label>
                        <label htmlFor="my-modal" className="btn btn-ghost" onClick={() => setModal(null)}> Cancel </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;