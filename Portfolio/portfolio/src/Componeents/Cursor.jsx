import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8  border border-gray-200 rounded-full pointer-events-none transition-transform duration-100 ease-in-out"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export default Cursor;
