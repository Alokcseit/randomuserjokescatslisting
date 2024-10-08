import { Link } from "react-router-dom";
import "./Random.css"
import User from "./User";
const RandomUser = () => {
 

  return (
    <div className='group10'>
        <div  style={{height: '50px',fontSize: '30px',color:"black",backgroundColor:"white"}}>
        <i class="fa-regular fa-user"></i> Random User
        </div>
        <div className='random'>
        Random user
          <div className='rectangle11'>
             <User/>
             <div>
                <Link to="https://chaicode.com/" >
                  <img  className='chaicode' src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__" alt="Chaicode"/>
                </Link>
             </div>
          </div>
        </div>
    </div>
  );
};

export default RandomUser;
