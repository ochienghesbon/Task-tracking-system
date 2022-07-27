import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>This is a Task Tracking System<a href="www.hesbon.com" target="_self" style={{color: "white", textDecoration: "none"}}><b> By Hesbon Odhiambo</b></a></h4>
            <Link to="/" style={{color:"#ff0000"}}>Home</Link>
        </div>
    )
}

export default About
