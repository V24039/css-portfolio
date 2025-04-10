import { useEffect, useState } from 'react';

interface Props {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = '' }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, idx) => (
        <span
          key={idx}
          className={`inline-block transition-all duration-300 ${
            mounted ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${idx * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
