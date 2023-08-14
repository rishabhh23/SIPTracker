import React from "react";

const StockNameList = ({ results }) => {
  return (
    <div className="flex justify-between items-center">
      {results.map((item) => {
        return (
          <li key={item.symbol}>
            <span>{item.symbol}</span>;
          </li>
        );
      })}
    </div>
  );
};

export default StockNameList;
