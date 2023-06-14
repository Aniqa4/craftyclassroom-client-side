import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';


function AddClass() {

  const { user } = useContext(AuthContext);
  const handleAddClass = (e) => {
    e.preventDefault();

    const form = e.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const name = form.name.defaultValue;
    const email = form.email.defaultValue;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const status = 'pending';
    const totalEnrolledStudents = 0;
    const feedback = 'No feedback yet.'
    const newClass = { className, classImage, name, email, availableSeats, price, status, totalEnrolledStudents, feedback }
    console.log('clicked', newClass);

    fetch('https://summer-camp-school-server-side-phi.vercel.app/newClass', {
      method: 'POST',
      headers:
        { 'content-type': 'application/json' },
      body: JSON.stringify(newClass)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Toy has been deleted',
      showConfirmButton: false,
      timer: 1500

    })
    form.reset()

  }
  return (
    <div className='container mx-auto md:my-24 '>
      <SectionTitle title={'Add a new class'}></SectionTitle>
      <form onSubmit={handleAddClass} className='grid grid-cols-1 gap-5 w-6/12 mx-auto border rounded-xl'>
        <input type="text" name="className" placeholder="Class Name" className="input input-bordered input-accent " />
        <input type="text" name="classImage" placeholder="Class Cover Photo url" className="input input-bordered input-accent" />
        <input type="text" name="name" defaultValue={user.displayName} disabled className="input input-bordered input-accent" />
        <input type="email" name="email" defaultValue={user.email} disabled className="input input-bordered input-accent" />
        <input type="number" pattern="[789][0-9]{9}" name="price" placeholder="Enter Price($)" className="input input-bordered input-accent" />
        <input type="number" pattern="[789][0-9]{9}" name="availableSeats"
          placeholder="Enter Total Seats(max 20)" className="input input-bordered input-accent" />
        <input type="Submit" value="ADD" className='btn' />
      </form>
      <Link to="/dashboard"><button className='btn flex mx-auto my-10'>Return to dashboard</button></Link>
    </div>
  )
}

export default AddClass