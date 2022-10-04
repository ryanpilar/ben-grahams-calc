
// instead of using an <a> tag and have the browser refresh, we are going to use <Link> 
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>Version 1.0.0</h4>  
        <Link to="/">Go Back</Link>
    </div>


  )
}

export default About