import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>This is Home:{allCourse.length}</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    allCourse.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Home;