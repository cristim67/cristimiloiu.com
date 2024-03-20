import React from 'react';

interface ButtonProps {
  color: string;
  setColor: (color: string) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={props.color}
      onClick={() => {
        props.setColor(props.color);
      }}
    ></button>
  );
}

export default Button;
