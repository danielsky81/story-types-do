import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
  return (
    <Container>
      <Navbar expand="lg" className='d-flex justify-content-center'>ToDo App with Storybook | propTypes | Bootstrap</Navbar>
    </Container>  
  )
};

Header.propTypes = {}

export default Header
