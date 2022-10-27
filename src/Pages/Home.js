import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2 className='bg-indigo-500 w-2/5 m-auto mb-3 text-gray-200 font-medium py-1 shadow-lg rounded-sm  '>Our Best Selling Course</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    allCourse.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Home;