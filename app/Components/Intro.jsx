import React from "react";

function Intro() {
  return (
    <div className='flex flex-col items-center justify-center pt-6 pb-6 text-center'>
      <h1 className='mb-1 text-4xl font-bold md:mb-3 md:text-7xl'>
        Cameron Mitchell
      </h1>
      <p className='mb-3 text-base font-medium md:text-xl'>
        Data Analyst and Frontend Web Developer
      </p>
      <p className='mb-6 max-w-xl text-sm font-bold'>
        Hello, I am a data analyst and self taught developer. I am 26 years old
        and I have a beautiful wife named Paige along with two amazing dogs
        named Ruger and Rosie. If I am not sat behind my computer reading
        language documentations and trying to implement them in my code, you can
        often find me out golfing with my friends or enjoying a walk with my
        wife. I am passionate about continuing to grow in my developer journey
        and building bigger and better projects.
      </p>
    </div>
  );
}

export default Intro;
