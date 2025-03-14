import React, { useState, useEffect } from 'react';
import rocket from './assets/rocket.png';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='fixed top-0 left-0 rotate-45 z-[999] overflow-visible pointer-events-none  -translate-x-[220%] -translate-y-[15%]  transition-transform ease-in-out duration-200'
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
    >
      <img
        className='w-12 pointer-events-none rounded-full  '
        src={rocket}
        alt='rocket'
      />
    </div>
  );
};

export default Cursor;
