'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 50, className = '' }: TypewriterProps) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const isComplete = displayedLength >= text.length;

  useEffect(() => {
    setDisplayedLength(0);
  }, [text]);

  useEffect(() => {
    if (!isComplete) {
      const t = setTimeout(() => setDisplayedLength((n) => n + 1), speed);
      return () => clearTimeout(t);
    }
  }, [displayedLength, text.length, speed, isComplete]);

  const visible = text.slice(0, displayedLength);
  const hidden = text.slice(displayedLength);

  return (
    <span className={`inline-block wrap-break-word ${className}`.trim()}>
      <span className="whitespace-pre-wrap">{visible}</span>
      <span
        className={isComplete ? 'invisible' : 'animate-pulse'}
        aria-hidden="true"
      >
        |
      </span>
      <span className="whitespace-pre-wrap invisible select-none" aria-hidden="true">
        {hidden}
      </span>
    </span>
  );
}
