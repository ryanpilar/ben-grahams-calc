// this allows us to look at the route that we are currently on. useLocation is a hook
import { useLocation } from 'react-router-dom'
// kinda of like a built in type system for your properties. Its not something that you have to use, but it may help you make your code more robust
import PropTypes from 'prop-types'
import Button from './Button'

// rafce ;)
const Header = ({ title, onAdd, isShowing }) => {

    const location = useLocation()
    const onClick = () => {
        
        onAdd()
    }
  return (
    // class='header' is going to make it flex box it and align it side by side:
    <header className='header'>                                 
        <h1>{title}</h1>

        {location.pathname === '/' &&
            <Button color={isShowing ? 'orange':'green'} text={isShowing ? 'Close':'Add'} onClick={onClick}/>
        }
        

    </header>
  )
}

// this will show up if no props are passed:
Header.defaultProps = {
    title: 'Task Track Track'
}

Header.propTypes = {
    // now if a number was passed in for the title, it will still render but now you will get a warning
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'blue'
// }

export default Header