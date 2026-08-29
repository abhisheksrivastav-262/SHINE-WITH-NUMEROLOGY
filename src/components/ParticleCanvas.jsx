import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Number particles 1 to 9 & gold dust
    const particles = [];
    const particleCount = Math.min(45, Math.floor(width / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.2,
        size: Math.random() * 14 + 10,
        alpha: Math.random() * 0.4 + 0.15,
        number: Math.floor(Math.random() * 9) + 1,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        isNumber: i % 2 === 0
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(0.6, p.alpha));

        if (p.isNumber) {
          ctx.font = `600 ${p.size}px 'Playfair Display', serif`;
          ctx.fillStyle = '#C8A44D';
          ctx.shadowBlur = 12;
          ctx.shadowColor = 'rgba(200, 164, 77, 0.6)';
          ctx.fillText(p.number.toString(), p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 6, 0, Math.PI * 2);
          ctx.fillStyle = '#FFF0CA';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#C8A44D';
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
