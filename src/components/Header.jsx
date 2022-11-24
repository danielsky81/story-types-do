import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <nav className='d-flex justify-content-center mb-4'>
      <h1 className='p-4'>{title}</h1>
    </nav>
  )
};

Header.defaultProps = {
  title: "ToDo App with Storybook | propTypes | Bootstrap"
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
