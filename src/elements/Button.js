import React from 'react';

const Button = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick}>Додати до кошика</button>
  );
};

export default Button;