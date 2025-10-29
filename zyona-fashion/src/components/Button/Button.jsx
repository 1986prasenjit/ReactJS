import React from "react";

const Button = ({ children, buttonType, type, onClickHandler }) => {
  const buttonStyles = {
    danger: "bg-red-500 hover:bg-red-600",
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
  };

  const baseStyles =
    "px-4 py-2 sm:px-6 sm:py-3 sm:w-48 w-32 md:w-52 text-sm sm:text-md lg:text-xl text-white rounded transition-colors duration-200";

  const finalClassName = `${baseStyles} ${
    buttonStyles[buttonType] || buttonStyles.primary
  }`;
  return (
    <div>
      <button type={type} onClick={onClickHandler} className={finalClassName}>
        {children}
      </button>
    </div>
  );
};

export default Button;
