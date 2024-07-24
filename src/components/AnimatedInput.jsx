import React, { useState } from "react";

const AnimatedInput = ({ label, type = "text", ...props }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(value !== "");
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="relative w-full my-4">
      <input
        type={type}
        className={`input-field w-full border-2 border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500
        ${focused || value ? "pt-6 pb-1" : "pt-2 pb-2"}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        placeholder=" "
        {...props}
      />
      <label
        className={`absolute left-3 transition-all duration-200 ease-in-out
        ${
          focused || value
            ? "-top-2 left-6 text-sm font-bold px-2 bg-yellow-300 text-gray-600 rounded-2xl"
            : "pl-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default AnimatedInput;
