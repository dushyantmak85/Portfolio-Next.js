'use client';
import { useEffect, useRef } from "react";

type Shape = 'circle' | 'square' | 'triangle' | 'x';

type Particle = {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  shape: Shape;
  color: string;
};

export default function ParticlesBackground({ className = "" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = document.body.scrollHeight;

      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(scale, scale);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const shapeOptions: { shape: Shape; color: string }[] = [
      { shape: 'circle', color: '#ff3b3b' },
      { shape: 'square', color: '#3b92ff' },
      { shape: 'triangle', color: '#00cc66' },
      { shape: 'x', color: '#a14ef0' },
    ];

    // 🔥 Increase particle count here
    const particles: Particle[] = Array.from({ length: 800 }, () => {
      const { shape, color } = shapeOptions[Math.floor(Math.random() * shapeOptions.length)];
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * document.body.scrollHeight,
        r: Math.random() * 3 + 2,
        dx: Math.random() * 0.4 - 0.2,
        dy: Math.random() * 0.4 - 0.2,
        shape,
        color,
      };
    });

    const drawShape = (p: Particle) => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1.5;

      switch (p.shape) {
        case 'circle':
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
          break;
        case 'triangle':
          ctx.moveTo(p.x, p.y - p.r);
          ctx.lineTo(p.x - p.r, p.y + p.r);
          ctx.lineTo(p.x + p.r, p.y + p.r);
          ctx.closePath();
          ctx.fill();
          break;
        case 'x':
          ctx.moveTo(p.x - p.r, p.y - p.r);
          ctx.lineTo(p.x + p.r, p.y + p.r);
          ctx.moveTo(p.x + p.r, p.y - p.r);
          ctx.lineTo(p.x - p.r, p.y + p.r);
          ctx.stroke();
          break;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, document.body.scrollHeight);
      for (let p of particles) {
        drawShape(p);
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        if (p.y < 0) p.y = document.body.scrollHeight;
        if (p.y > document.body.scrollHeight) p.y = 0;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-screen h-[100vh] z-0 pointer-events-none ${className}`}
    />
  );
}
