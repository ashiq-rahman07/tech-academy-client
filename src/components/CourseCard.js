import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { _id, title, name, author, details, image_url, rating, total_view } = course;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image_url} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <div className="card-actions justify-end">
                    <Link to={`/course-details/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>

                </div>
            </div>
        </div>
    );
};

export default CourseCard;