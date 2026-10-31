
"use client";

import { useEffect, useRef } from "react";

type LiquidBlob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  strength: number;
  delay: number;
};

export function FlowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0.5);
  const mouseY = useRef(0.5);
  const targetMouseX = useRef(0.5);
  const targetMouseY = useRef(0.5);

  const blobs = useRef<LiquidBlob[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    blobs.current = [
      { x: 0.24, y: 0.25, vx: 0, vy: 0, size: 420, strength: 1.15, delay: 0.1 },
      { x: 0.72, y: 0.38, vx: 0, vy: 0, size: 500, strength: 1.35, delay: 0.42 },
      { x: 0.55, y: 0.68, vx: 0, vy: 0, size: 460, strength: 1.5, delay: 0.8 },
      { x: 0.18, y: 0.82, vx: 0, vy: 0, size: 360, strength: 1.1, delay: 1.1 },
    ];

    const handlePointerMove = (event: PointerEvent) => {
      targetMouseX.current = event.clientX / window.innerWidth;
      targetMouseY.current = event.clientY / window.innerHeight;
    };

    window.addEventListener("pointermove", handlePointerMove);

    let animationFrame = 0;

    const animate = () => {
      mouseX.current += (targetMouseX.current - mouseX.current) * 0.08;
      mouseY.current += (targetMouseY.current - mouseY.current) * 0.08;

      const time = performance.now();

      blobs.current.forEach((blob, index) => {
        const dx = mouseX.current - blob.x;
        const dy = mouseY.current - blob.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influenceRadius = 0.55;

        if (distance < influenceRadius) {
          const influence = 1 - distance / influenceRadius;
          const force = influence * 0.00065 * blob.strength;

          blob.vx += dx * force;
          blob.vy += dy * force;
        }

        blob.vx += Math.sin(time * 0.00012 + blob.delay) * 0.000045;
        blob.vy += Math.cos(time * 0.0001 + blob.delay) * 0.00005;

        blob.x += blob.vx;
        blob.y += blob.vy;

        blob.vx *= 0.965;
        blob.vy *= 0.965;

        if (blob.x < -0.18 || blob.x > 1.18) {
          blob.x = Math.max(-0.18, Math.min(1.18, blob.x));
          blob.vx *= -0.45;
        }

        if (blob.y < -0.18 || blob.y > 1.18) {
          blob.y = Math.max(-0.18, Math.min(1.18, blob.y));
          blob.vy *= -0.45;
        }

        const angle = Math.atan2(blob.vy, blob.vx) * (180 / Math.PI);
        const speed = Math.sqrt(blob.vx * blob.vx + blob.vy * blob.vy);
        const stretch = Math.min(speed * 2200, 16);

        const element = container.children[index] as HTMLElement | undefined;
        if (!element) return;

        element.style.transform = `
          translate3d(${blob.x * 100}vw, ${blob.y * 100}vh, 0)
          translate(-50%, -50%)
          rotate(${angle}deg)
          scaleX(${1 + stretch / 100})
          scaleY(${1 - stretch / 300})
        `;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="liquid-background pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="liquid-purple absolute left-0 top-0 h-[420px] w-[420px] rounded-full blur-[90px]" />

      <div className="liquid-pink absolute left-0 top-0 h-[500px] w-[500px] rounded-full blur-[100px]" />

      <div className="liquid-blue absolute left-0 top-0 h-[460px] w-[460px] rounded-full blur-[100px]" />

      <div className="liquid-purple-secondary absolute left-0 top-0 h-[360px] w-[360px] rounded-full blur-[90px]" />
    </div>
)};
