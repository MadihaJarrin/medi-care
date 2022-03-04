import React from 'react';
import PaymentMethod from './PaymentMethod';


const teachingCourses = [
    {
        id: 1,
        space: 500

    },
    // {
    //     id: 2,
    //     space: 500
    // },
    // {
    //     id: 3,
    //     space: 500
    // },
    // {
    //     id: 4,
    //     space: 500

    // },
    // {
    //     id: 5,
    //     space: 500
    // },
    // {
    //     id: 6,
    //     space: 500
    // },

]

const Payment = () => {
    return (
        <div>

            {
                teachingCourses.map(teachingCourse => <PaymentMethod
                    key={teachingCourses.id}
                    teachingCourse={teachingCourse}

                ></PaymentMethod>)
            }

        </div>
    );
};

export default Payment;