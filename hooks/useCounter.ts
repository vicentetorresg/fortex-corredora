"use client";

import { useEffect, useState } from "react";

export function useCounter(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        start = requestAnimationFrame(step);
      }
    }

    start = requestAnimationFrame(step);
    return () => cancelAnimationFrame(start);
  }, [target, duration, active]);

  return count;
}
