import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>This is a Task Tracking System<a href="www.hesbon.com" target="_blank" style={{color: "white", textDecoration: "none"}}><b> Hesbon Odhiambo</b></a></h4>
            <Link to="/" style={{color:"white"}}>Home</Link>
        </div>
    )
}

export default About
