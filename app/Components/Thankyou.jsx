import React from "react";
import { people } from "../Data/Thay";

export default function List() {
  const listItem_1 = people.map((item) => (
    <ol className='border-stone-200 dark:border-stone-700 relative flex flex-col border-l md:flex-row md:w-7/12'>
      <li className='mb-10 ml-4' key={item.id}>
        <div className='bg-stone-200 dark:border-stone-900 dark:bg-stone-700 absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white' />
        <p className='flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm'>
          <span className='dark:text-stone-900 bg-stone-900 inline-block rounded-md px-2 py-1 font-semibold text-white dark:bg-white'>
            {item.name}
          </span>
        </p>
        <br />
        <p className='text-stone-500 dark:text-stone-400 my-2 text-base font-normal'>
          {item.influ}
        </p>
      </li>
    </ol>
  ));
  return <ul>{listItem_1}</ul>;
}
