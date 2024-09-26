import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const InputBox = ({ name, type, id, value, placeholder, icon }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full mb-4">
      <input
        type={type === 'password' ? (passwordVisible ? "text" : "password") : type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className="input-box"
      />
      <i className="input-icon">
        {icon} {/* Display the passed icon */}
      </i>
      {type === "password" && (
        <div
          className="absolute right-4 top-3 cursor-pointer"
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
        >
          {!passwordVisible ? <IoEyeOffOutline  /> : <IoEyeOutline />}
        </div>
      )}
    </div>
  );
};

export default InputBox;
