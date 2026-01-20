'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 50, className = '' }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Invisible full text to reserve space and prevent layout shift */}
      <span className="invisible whitespace-pre-wrap wrap-break-words" aria-hidden="true">
        {text}
      </span>
      {/* Visible typewriter text positioned absolutely on top */}
      <span className="absolute inset-0 whitespace-pre-wrap wrap-break-words">
        {displayedText}
        {currentIndex < text.length && (
          <span className="animate-pulse">|</span>
        )}
      </span>
    </span>
  );
}
