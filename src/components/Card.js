import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full h-full rounded-md relative p-8 bg-gray-300 border-2 border-green-400">
      {children}
    </div>
  );
};

export default Card;
