import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Jokes() {
    const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomJoke = async () => {
    setLoading(true);
    const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
    setJoke(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  const randomTimestamp = () => {
    const now = new Date();
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomHours = Math.floor(Math.random() * 24);
    const randomDays = Math.floor(Math.random() * 30);

    now.setMinutes(now.getMinutes() - randomMinutes);
    now.setHours(now.getHours() - randomHours);
    now.setDate(now.getDate() - randomDays);

    return now.toLocaleString(); // Returns a localized string representing the timestamp
};

const randomViews = () => {
    return Math.floor(Math.random() * 1000000).toLocaleString(); // Generates a random number up to 1 million and formats it with commas
};
  console.log(joke)

  if (!joke) {
    return <div>Loading...</div>; // Implement better loading UI as per your creativity
  }

  if (loading) {
    return <div>Loading...</div>; // Implement better loading UI as per your creativity
  }
  console.log(joke.data.content)
  return (
    <div>
        <div className="jokes">
           <Link style={{color:"white"}} to="/"><i className="fa-solid fa-arrow-left"></i></Link>
             <div>
                <h3 style={{color:"white"}}>Post</h3>
             </div>
        </div>
        <div className='imagename1'>
          <div className='imagelogoandname'>
                    <img
                        className='imagelogo'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8UfxvpY3ZNV_TTYb0pFMpb05L45B2XnLKA&s" // Replace with the actual image URL
                        alt='Logo'
                    />
             <div className='imagename'>
                <div className='name1'>Elon Musk</div>
                <div className="tweetname"> @elonmusk</div>
             </div>
          </div>
          
          <div className='menu'>
          <i className="fa-solid fa-ellipsis"></i>
          </div>

        </div>
        <br></br>
        <div className='jokes1'>
         {joke.data.content}
        </div>
        <div style={{height:"10px"}}>

        </div>
        <div className='dateandviews'>
             <div className='timestamp'>{randomTimestamp()}</div>
             <div className='views'>{randomViews()} views</div>
        </div>
        <br></br>
        <div className='comment'>
            <div>
            <i className="fa-regular fa-message"></i> 4.9K
            </div>
            <div>
            <i className="fa-solid fa-arrows-rotate"></i> 5.3K
            </div>
            <div>
            <i className="fa-regular fa-heart"></i> 59K
            </div>
            <div>
            <i className="fa-regular fa-bookmark"></i> 1.1K
            </div>
            <div>
            <i class="fa-solid fa-upload"></i>
            </div>

        </div>
        <div style={{height:"10px",width:"100%",textAlign:"center", color:"#645757",paddingTop:"10px"}}>
            @ chai aur code
        </div>
    </div>
  )
}

export default Jokes
