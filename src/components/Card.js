import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white w-full h-full rounded-md relative p-8">
      {children}
    </div>
  );
};

export default Card;
