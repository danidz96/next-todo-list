import PropTypes from 'prop-types';

const Wrapper = ({ children, className, width = 1000 }) => (
  <div className={className}>
    {children}
    <style jsx>
      {`
        div {
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }
      `}
    </style>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Wrapper;
