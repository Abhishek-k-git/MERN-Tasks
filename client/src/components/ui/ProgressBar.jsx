import React from "react";

const ProgressBar = ({ progress }) => (
   <div className="w-full h-6 relative bg-blue-50 overflow-hidden">
      <div
         className="absolute inset-0 bg-blue-600 h-full"
         style={{
            width: `${progress}%`,
         }}
      />
   </div>
);

export default ProgressBar;
