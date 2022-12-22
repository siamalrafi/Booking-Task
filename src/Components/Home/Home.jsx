import React from 'react';
import { useQuery } from '@tanstack/react-query';
import BookingCart from '../BookingCart/BookingCart';


const Home = () => {
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['availableSeats'],
        queryFn: async () => {
            const res = await fetch('https://booking-task-backend.vercel.app/availableSeats');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <div className='text-center'>
            <h1>loading........</h1>
            <h1>loading........</h1>
            <h1>loading........</h1>
        </div>
    };


    return (
        <div>
            <h1 className='text-center font-bold text-4xl py-12'>Book Your Best One. </h1>


            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 justify-items-center'>
                {
                    data.map((seat, i) => <BookingCart key={i} seat={seat} refetch={refetch}>

                    </BookingCart>)
                }
            </div>


        </div>
    );
};

export default Home;