
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


function User() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const fetchRandomUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/user/random');
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching random user:', error);
      }
      setLoading(false);
    }
    
useEffect(()=>{
  fetchRandomUser()
},[])
console.log(user)
if(loading){
  return <p>Loading...</p>
}

  return (
    <div>
       <div className='c1'>
         <Link to="/">
         <i className="fa-solid fa-arrow-left"></i>
         </Link>
         <div>
            <h3>Profile Overview</h3>
         </div>
         <div className='refresh' onClick={fetchRandomUser} >
          <i className="fa-solid fa-arrows-rotate"></i>
         </div>
         
      </div>
      <div className='agepill'>
         <div style={{ display: 'block',  color: 'white', fontSize: '13px'}}>{user.name.title}</div>
      </div>
     <div className='c2'>
     <img  className="image1" src={user.picture.medium} alt="User Avatar"  />
     </div>
      
      
      <h2 className='name'>{` ${user.name.first} ${user.name.last}`}</h2>
      <div className='email'> {user.email}</div>
      <br></br>
      <div className="locationandcall">
        <a className="location"href={`https://maps.google.com/?q=${user.location.coordinates.latitude},${user.location.coordinates.longitude}`} target="_blank" rel="noopener noreferrer">
           <i className="fa-solid fa-location-dot"></i>Location
           
        </a>
        <a className="call" href={`tel:${user.cell}`}>
        <i className="fa-solid fa-phone-volume"></i>Callme</a>
      </div>
      <br></br>
      <div className='c3'>
        <div className='city'>
            <div className='w1'>
                city
            </div>
            <div className='w2'>{user.location.city}</div>
        </div>
        <div className='nationality'>
            <div className='w1'>
                nationality
            </div>
            <div className='w2'>{user.nat}</div>
        </div>
        <div className='dob'>
            <div className='w1'>
                date of birth
            </div>
            <div className='w2'>{user.dob.date}</div>
        </div>
        <div className='phoneno'>
            <div className='w1'>
                phone number
            </div>
            <div className='w2'>{user.cell}</div>
        </div>
        <div className='timezone'>
            <div className='w1'>
                timezone
            </div>
            <div className='w2'>{user.location.timezone.description}</div>
        </div>
        <div className='registeredsince'>
            <div className='w1'>
                registered since
            </div>
            <div className='w2'>{user.registered.date}</div>
        </div>
      </div>
     
    </div>
  )
}

export default User
