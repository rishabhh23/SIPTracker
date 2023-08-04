import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6  p-10 font-rem">
      <div>
        <Card>Header</Card>
      </div>
      <div>
        <Card>Chart</Card>
      </div>
      <div>
        <Card>Overview</Card>
      </div>
      <div>
        <Card>Details</Card>
      </div>
    </div>
  );
};

export default Dashboard;
