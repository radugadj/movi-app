import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick } = props;
  return (
    <button className="btn__button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;