import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='overflow-hidden rounded-md border-2 border-stone-900 dark:border-white'
    >
      <img
        src={imgUrl}
        alt='portfolio'
        className='h-36 w-full cursor-pointer object-cover hover:scale-95 md:h-48'
      />

      <div className='w-full p-4'>
        <div className='mb-2 text-lg font-semibold md:mb-3 md:text-xl'>
          {title}
        </div>
        <div className='flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm'>
          {stack.map((item) => (
            <span className='inline-block rounded-md border-2 border-stone-900 px-2 py-1 font-semibold dark:border-white'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
