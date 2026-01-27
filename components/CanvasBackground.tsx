"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle configuration
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    const maxDistance = 150;
    
    // Detect dark mode
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const colors = isDarkMode
      ? [
          "rgba(59, 130, 246, 0.6)", // blue-500 (brighter for dark mode)
          "rgba(147, 51, 234, 0.6)", // purple-600
          "rgba(99, 102, 241, 0.6)", // indigo-500
        ]
      : [
          "rgba(59, 130, 246, 0.4)", // blue-500
          "rgba(147, 51, 234, 0.4)", // purple-600
          "rgba(99, 102, 241, 0.4)", // indigo-500
        ];

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };
    initParticles();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Draw functions
    const drawParticle = (particle: Particle) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    const drawConnection = (p1: Particle, p2: Particle, distance: number) => {
      if (!ctx) return;
      const opacity = 1 - distance / maxDistance;
      const connectionColor = isDarkMode
        ? `rgba(59, 130, 246, ${opacity * 0.4})`
        : `rgba(59, 130, 246, ${opacity * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = connectionColor;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const drawMouseConnection = (particle: Particle, mouseX: number, mouseY: number) => {
      if (!ctx) return;
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance * 1.5) {
        const opacity = 1 - distance / (maxDistance * 1.5);
        const mouseColor = isDarkMode
          ? `rgba(147, 51, 234, ${opacity * 0.5})`
          : `rgba(147, 51, 234, ${opacity * 0.4})`;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = mouseColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw glow effect near mouse
        const gradient = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          maxDistance * 1.5
        );
        const glowOpacity = isDarkMode ? 0.3 : 0.2;
        gradient.addColorStop(0, `rgba(147, 51, 234, ${glowOpacity})`);
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(
          mouseX - maxDistance * 1.5,
          mouseY - maxDistance * 1.5,
          maxDistance * 3,
          maxDistance * 3
        );
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with slight fade for trail effect
      const clearColor = isDarkMode
        ? "rgba(10, 10, 10, 0.1)"
        : "rgba(255, 255, 255, 0.05)";
      ctx.fillStyle = clearColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        drawParticle(particle);

        // Draw connections to nearby particles
        particlesRef.current.forEach((otherParticle) => {
          if (particle === otherParticle) return;
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            drawConnection(particle, otherParticle, distance);
          }
        });

        // Draw connection to mouse
        drawMouseConnection(particle, mouseRef.current.x, mouseRef.current.y);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default CanvasBackground;
