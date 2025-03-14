import React from 'react';
import PopupImage from './assets/elondreck.png';
const Popup = ({ handler }) => {
  return (
    <div className='border-[2px] cursor-auto border-t-white border-l-white border-r-black border-b-black fixed w-screen h-screen bg-black/50 top-0 left-0 flex items-center justify-center z-[999]'>
      {/* <div className='absolute w-full h-full '></div> */}
      <div className='p-2 bg-[#CCCCCC] max-w-sm'>
        <div className='w-full text-lg bg-[#0400A0] py-2 px-4 items-center flex justify-between'>
          <p className='text-white'>System Message</p>
          <button
            className='w-8 h-8 flex items-center justify-center'
            onClick={handler}
          >
            <Cross />
          </button>
        </div>
        <a
          href='https://dexscreener.com/moonshot'
          rel='noreferrer'
          target='_blank'
          className='cursor-pointer'
        >
          <img src={PopupImage} alt='popup' />
        </a>
        <div className='flex items-center gap-2 mt-4'>
          <a
            className='p-2 text-center w-full font-semibold border-[2px] shadow-lg hover:shadow-2xl border-t-white border-l-white border-r-black border-b-black'
            href='https://dexscreener.com/moonshot'
            rel='noreferrer'
            target='_blank'
          >
            Accept
          </a>
          <button
            className='p-2 w-full font-semibold  shadow-xl border-[2px] border-t-white border-l-white border-r-black border-b-black'
            onClick={handler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

const Cross = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M9.58536 7.46404L2.12132 0L0 2.12132L7.46405 9.58537L0 17.0494L2.12131 19.1707L9.58536 11.7067L17.0494 19.1707L19.1707 17.0494L11.7067 9.58537L19.1707 2.12132L17.0494 0L9.58536 7.46404Z'
      fill='white'
    />
  </svg>
);
