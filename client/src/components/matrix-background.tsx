import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const container = containerRef.current;

    // Clear any existing content
    container.innerHTML = '';

    for (let i = 0; i < 50; i++) {
      const span = document.createElement('span');
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.position = 'absolute';
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDelay = Math.random() * 20 + 's';
      span.style.fontSize = Math.random() * 20 + 10 + 'px';
      span.style.color = 'hsl(var(--cyber-blue))';
      span.classList.add('animate-matrix');
      container.appendChild(span);
    }

    // Add random particles
    const addParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle animate-float';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = '0s';
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 3000);
    };

    const particleInterval = setInterval(addParticle, 2000);

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
}
