import PropTypes from 'prop-types'
import Button from './Elements/Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log("Clicked");
    }
    
    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button color='green' text='Add' onClick={ onClick } />
        </header>
    )
}

Header.defaultProps = {
    title: 'Temp Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


// CSS in JSX
// const headingStyle = {
//     color: 'red', 
//     textAlign: 'center'
// }

export default Header
