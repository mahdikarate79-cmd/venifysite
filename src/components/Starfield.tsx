'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  peakOpacity: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
}

export default function Starfield() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 140 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.8 + 0.4,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 3,
      peakOpacity: Math.random() * 0.5 + 0.25,
    }));
  }, []);

  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const spawn = () => {
      const fromTop = Math.random() > 0.35;
      const startX = Math.random() * 100;
      const startY = fromTop ? Math.random() * 25 : Math.random() * 40;
      const travel = 35 + Math.random() * 45;
      const angle = fromTop
        ? (25 + Math.random() * 35) * (Math.PI / 180)
        : (140 + Math.random() * 40) * (Math.PI / 180);

      const endX = startX + Math.cos(angle) * travel;
      const endY = startY + Math.sin(angle) * travel;
      const duration = 0.55 + Math.random() * 0.35;
      const id = Date.now() + Math.random();

      setShootingStars((prev) => [...prev, { id, startX, startY, endX, endY, duration }]);
      window.setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, duration * 1000 + 100);
    };

    spawn();
    const interval = window.setInterval(spawn, 3200 + Math.random() * 2800);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.05, star.peakOpacity, 0.05],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <AnimatePresence>
        {shootingStars.map((meteor) => {
          const dx = meteor.endX - meteor.startX;
          const dy = meteor.endY - meteor.startY;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);

          return (
            <motion.div
              key={meteor.id}
              className="shooting-star"
              style={{
                left: `${meteor.startX}%`,
                top: `${meteor.startY}%`,
                rotate: angle,
              }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], x: `${dx}vw`, y: `${dy}vh` }}
              exit={{ opacity: 0 }}
              transition={{ duration: meteor.duration, ease: 'easeOut' }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
