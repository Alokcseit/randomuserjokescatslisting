import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from './CatCard';
import "./Cats.css";
import { Link } from 'react-router-dom';
const CatsList = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.freeapi.app/api/v1/public/cats');
        setCats(response.data.data.data);
      } catch (error) {
        console.error('Error fetching cats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div style={{height: '50px',fontSize: '30px',color:"black",backgroundColor:"white"}}>
      <i class="fa-solid fa-cat"></i>
        Cat Listing
      </div>
      <div className="cats-list">
        Cats Around Us
      <div>
                <Link to="https://chaicode.com/" >
                  <img  className='chaicode2' src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__" alt="Chaicode"/>
                </Link>
             </div>
             <br></br>
        <div className="scrolling-container">
          {cats.map(cat => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatsList;
