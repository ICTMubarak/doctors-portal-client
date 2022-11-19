import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimnial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winsone hanry',
            img: people1,
            location: 'carliphonia',
            review: 'sadfasd asdfasd ad ad',
        
        },
        {
            _id: 2,
            name: 'Winsone hanry',
            img: people2,
            location: 'carliphonia',
            review: 'sadfasd asdfasd ad ad',
        
        },
        {
            _id: 3,
            name: 'Winsone hanry',
            img: people3,
            location: 'carliphonia',
            review: 'sadfasd asdfasd ad ad',
        
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary'>Testimonial</h4>
                    <h3 className='text-4xl'>What our patient says</h3>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimnial;