import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${
            position.y - (isHovered ? 24 : 16)
          }px, 0)`
        }}
      >
        <div
          className={`rounded-full border border-[#C8A44D] transition-all duration-300 ${
            isHovered
              ? 'w-12 h-12 bg-[#C8A44D]/20 shadow-[0_0_25px_rgba(200,164,77,0.6)] scale-110'
              : 'w-8 h-8 opacity-60 shadow-[0_0_12px_rgba(200,164,77,0.3)]'
          }`}
        />
      </div>

      {/* Center Golden Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFF0CA] shadow-[0_0_8px_#C8A44D]" />
      </div>
    </>
  );
}
