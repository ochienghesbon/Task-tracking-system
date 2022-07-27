import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>By Hesbon Odhiambo</p>
    <Link to="/about" style={{color:"white"}}>About</Link>
        </footer>
    )
}

export default Footer
