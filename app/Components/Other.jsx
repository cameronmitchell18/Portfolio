import React from "react";
import Link from "next/link";

export default function Other() {
  return (
    <div class='container mx-auto flex min-w-full flex-col items-center p-6 mt-0 space-y-4'>
      <div class='flex flex-wrap'>
        <Link href='/ThankYou'>
          <button class='flex-shrink-0 rounded dark:bg-orange-100/95 bg-black px-3 py-2 m-2 font-bold dark:text-black hover:text-black text-white hover:bg-green-950/20 dark:hover:bg-green-200/70'>
            Supporters
          </button>
        </Link>

        <Link
          href='https://cameronmitchell18.github.io/Resume/'
          alt='Resume'
          target='_blank'
        >
          <button
            type='button'
            class='flex-shrink-0 px-3 py-2 m-2 rounded dark:bg-orange-100/95 bg-black font-bold hover:text-black dark:text-black text-white dark:hover:bg-green-200/70 hover:bg-green-950/20'
          >
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
}
