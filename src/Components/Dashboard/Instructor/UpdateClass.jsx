import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import SectionTitle from '../../SectionTitle/SectionTitle';

function UpdateClass() {
    const classData=useLoaderData()
    console.log(classData);

    const handleUpdateClass = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const updateClass = { className, classImage, availableSeats, price}
        console.log('clicked', updateClass);
    
        fetch(`https://summer-camp-school-server-side-phi.vercel.app/${classData._id}`, {
          method: 'PUT',
          headers:
            { 'content-type': 'application/json' },
          body: JSON.stringify(updateClass)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount===1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Data has been updated',
                    showConfirmButton: false,
                    timer: 1500})
            }
    
          })
        form.reset()
    
      }
    

  return (
    <div className='container mx-auto md:my-24 '>
        <SectionTitle title={'update your class'}></SectionTitle>
        <form onSubmit={handleUpdateClass} className='grid grid-cols-1 gap-5 lg:w-6/12 mx-auto'>
        <input type="text" name="className" defaultValue={classData.className} placeholder="Class Name" className="input input-bordered input-accent " />
        <input type="text" name="classImage" defaultValue={classData.classImage} placeholder="Class Cover Photo url" className="input input-bordered input-accent" />
        <input type="text" name="name" defaultValue={classData.name} disabled className="input input-bordered input-accent" />
        <input type="email" name="email" defaultValue={classData.email} disabled className="input input-bordered input-accent" />
        <input type="number" pattern="[789][0-9]{9}" name="price" placeholder="Enter Price($)" className="input input-bordered input-accent" />
        <input type="number" pattern="[789][0-9]{9}" name="availableSeats"
          placeholder="Enter Total Seats(max 20)" className="input input-bordered input-accent" />
        <input type="Submit" value="UPDATE" className='btn' />
      </form>
      <Link to="/dashboard"><button className='btn flex mx-auto my-10'>Return to dashboard</button></Link>
    </div>
  )
}

export default UpdateClass;