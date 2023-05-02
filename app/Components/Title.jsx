import React from "react";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className='text-stone-900 mb-5 text-2xl font-bold underline decoration-4 underline-offset-8 dark:text-white'
    >
      {children}
    </h1>
  );
}

export default Title;
