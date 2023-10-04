import { useEffect, useRef } from 'react';

export const useClickOutSide = (handle: () => void) => {
  const clickRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleEvent = (e: any) => {
      if (!clickRef.current?.contains(e.target)) handle();
    };
    document.addEventListener('mousedown', handleEvent);
    return () => document.removeEventListener('mousedown', handleEvent);
  });
  return clickRef;
};
