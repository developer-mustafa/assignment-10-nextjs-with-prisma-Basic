import React from 'react';

const layout = ({children}) => {
  return (
    <div>
      <p className="px-5 py-3 bg-red-500 text-white text-center"> i am from profile master layout</p>
      {children}
    </div>
  );
};

export default layout;