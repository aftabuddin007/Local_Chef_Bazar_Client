import React from 'react';

const Loading = () => {
    return (
        <div>
               <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full"
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #d1d5db", // Tailwind gray-300
          borderTop: "4px solid #3b82f6", // Tailwind blue-500
          borderRadius: "50%",
        }}
      ></div>
    </div>
        </div>
    );
};

export default Loading;