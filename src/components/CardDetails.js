import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LearnDetails from './LearnDetails';

const CardDetails = () => {
    const courseDetails = useLoaderData();
    const { _id, learn, description, title, name, author, details, image_url, rating, total_view } = courseDetails;
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content mt-0 flex-col lg:flex-row">
                    <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-6'>

                {
                    learn.map(det => <LearnDetails det={det}></LearnDetails>)
                }


            </div>
        </div>
    );
};

export default CardDetails;