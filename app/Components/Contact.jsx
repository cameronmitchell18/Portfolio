import React from "react";

function Contact() {
  return (
    <div className='items-center justify-center pt-4 pb-10 text-center'>
      <h1 className='pb-5 text-4xl font-bold md:mb-3 md:text-7xl'>
        Lets Work Together!
      </h1>
      <div className='mx-auto mb-10 flex flex-col'>
        <div className='flex items-center justify-center'>
          <form
            action='https://getform.io/f/df5fd3a4-af91-43f1-9c36-1c2a6b96ee29'
            method='POST'
            className='flex flex-col md:w-7/12'
          >
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='rounded-md border-2 dark:border-white border-black bg-transparent p-2 focus:outline-none'
            />
            <input
              type='hidden'
              name='_gotcha'
              className='display:none !important'
            ></input>
            <input
              type='text'
              name='email'
              placeholder='Email'
              className='my-2 rounded-md border-2 dark:border-white border-black bg-transparent p-2 focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Message'
              rows='10'
              className='mb-4 rounded-md border-2 dark:border-white border-black bg-transparent p-2 focus:outline-none'
            />
            <button
              type='submit'
              className='inline-block w-max rounded-md bg-gradient-to-r from-purple-500 to-orange-400 px-8 py-3 text-center text-base font-medium text-black dark:text-white drop-shadow-md hover:stroke-white'
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
