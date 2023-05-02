import Link from "next/link";
import Thankyou from "../Components/Thankyou";

export default function ThankYou() {
  return (
    <>
      <div className=' min-h-full bg-orange-100/95  transition-colors duration-500 dark:bg-black'>
        <Link href='/'>
          <div class='container mx-auto flex min-w-full flex-col items-center p-6 mt-0 space-y-4'>
            <div class='flex flex-wrap'>
              <button class='flex-shrink-0 rounded dark:bg-orange-100/95 bg-black px-3 py-2 m-2 font-bold dark:text-black hover:text-black text-white hover:bg-green-950/20 dark:hover:bg-green-200/70'>
                Home
              </button>
            </div>
          </div>
        </Link>
        <div className='mt-5 flex flex-col justify-center md:flex-row'>
          <div className='w-full md:w-7/12'>
            <Thankyou />
          </div>
        </div>
      </div>
    </>
  );
}
