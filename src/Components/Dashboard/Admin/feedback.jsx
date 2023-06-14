import React from 'react'
import Swal from 'sweetalert2';
import SectionTitle from '../../SectionTitle/SectionTitle';
import SubTitle from '../../SectionTitle/SubTitle';
import { useLoaderData } from 'react-router-dom';


function Feedback() {
    const data = useLoaderData();
    const id = data._id;
    console.log(id);


    const handleFeedback = (event) => {
        event.preventDefault();

        const form = event.target;
        const feedback = form.feedback.value;

        fetch(`https://summer-camp-school-server-side-phi.vercel.app/updateFeedback/${id}`, {
            method: 'PATCH',
            headers:
                { 'content-type': 'application/json' },
            body: JSON.stringify({ feedback: feedback })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Feedback has been sent',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }

            })


        //console.log('id',id);
    }
    return (
        <div className='container mx-auto md:my-24'>
            <SectionTitle title='Feedback page'></SectionTitle>
            <SubTitle subTitle={'Send your feedback to the Instructor'}></SubTitle>
            <form onSubmit={handleFeedback} className='grid gap-5'>
                <input type='text' name="feedback" placeholder='Write your feedback' className='border rounded p-5' />
                <input type="submit" value="Submit" className='btn' />
            </form>
        </div>
    )
}

export default Feedback