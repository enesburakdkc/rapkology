import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  shadowColor?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  backgroundColor = '#F7DC6F',
  textColor = '#2C3E50',
  shadowColor = '#000000',
  className = '',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={`
        relative
        border-none
        cursor-pointer
        outline-none
        transition-all duration-200 ease-in-out
        transform-gpu
        font-bold
        font-saira
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor,
        color: textColor,
        clipPath: 'polygon(0% 0%, 100% 0%, 93% 100%, 5% 90%)',
        boxShadow: `30px 30px 0 ${shadowColor}`,
      }}
    >
      <span
        className="block relative z-10 -mt-1"
        style={{ color: textColor }}
      >
        {children}
      </span>
    </button>
  );
};

export default CustomButton;