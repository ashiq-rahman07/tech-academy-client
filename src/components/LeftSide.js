import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [courseName, setCourseName] = useState([]);
    useEffect(() => {
        fetch('https://lerning-server-as-10.vercel.app/course-details')
            .then(res => res.json())
            .then(data => setCourseName(data));
    }, [])
    return (
        <div>
            <h2>Course Name: {courseName.length}</h2>
            <div className=''>
                {
                    courseName.map(course => <button className='bg-indigo-300 mb-3 w-3/4 text-gray-800 font-medium  py-2 rounded shadow-lg' key={course._id}><Link to={`course-details/${course._id}`}>{course.name}</Link></button>)
                }
            </div>
            
        </div>
    );
};

export default LeftSide;