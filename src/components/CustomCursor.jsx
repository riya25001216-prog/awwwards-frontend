import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setCursorText(target.getAttribute('data-cursor') || '');
      } else {
        const isClickable = e.target.closest('a, button, input, textarea, [role="button"]');
        setIsHovered(!!isClickable);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trailing spring effect
  useEffect(() => {
    let animId;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference hidden md:block">
      {/* Small instant dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-white transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* Trailing follower circle */}
      <div
        className="fixed rounded-full flex items-center justify-center font-mono text-[9px] font-bold uppercase tracking-wider text-black bg-white transition-all duration-300 ease-out"
        style={{
          width: isHovered ? (cursorText ? '72px' : '44px') : '24px',
          height: isHovered ? (cursorText ? '72px' : '44px') : '24px',
          transform: `translate3d(${trailingPos.x - (isHovered ? (cursorText ? 36 : 22) : 12)}px, ${
            trailingPos.y - (isHovered ? (cursorText ? 36 : 22) : 12)
          }px, 0) scale(${isClicking ? 0.85 : 1})`,
          opacity: 0.92,
        }}
      >
        {cursorText && (
          <span className="animate-fade-in text-center px-1 leading-tight select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
