import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button />
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracker v1'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS -  can be passed into the h1 style {}
// i.e. <h1 style = {headingStyle}></h1>

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
