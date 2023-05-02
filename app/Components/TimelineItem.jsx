import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className='border-stone-200 dark:border-stone-700 relative flex flex-col border-l md:flex-row'>
      <li className='mb-10 ml-4'>
        <div className='bg-stone-200 dark:border-stone-900 dark:bg-stone-700 absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white' />
        <p className='flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm'>
          <span className='dark:text-stone-900 bg-stone-900 inline-block rounded-md px-2 py-1 font-semibold text-white dark:bg-white'>
            {year}
          </span>
          <h3 className='text-stone-900 text-lg font-semibold dark:text-white'>
            {title}
          </h3>
          <div className='text-stone-400 dark:text-stone-500 my-1 text-sm font-normal leading-none'>
            {duration}
          </div>
        </p>
        <p className='text-stone-500 dark:text-stone-400 my-2 text-base font-normal'>
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
