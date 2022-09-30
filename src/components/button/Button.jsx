import PropTypes from 'prop-types';
import { LoadMoreBtn } from './ButtonStyled'

const Button = ({ onClick, children, ...allyProps }) => {
  return <LoadMoreBtn onClick={() => onClick()} {...allyProps}>{children}Load more</LoadMoreBtn>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;


// import React from 'react';
// import PropTypes from 'prop-types';


// const Button = ({ fetchImages, children }) => (
//   <div>
//     <button type="button" onClick={fetchImages}>
//       {children}
//     </button>
//   </div>
// );

// Button.propTypes = {
//   fetchImages: PropTypes.func,
//   children: PropTypes.string,
// };

// export default Button;