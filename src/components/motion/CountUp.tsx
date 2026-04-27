"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ to, duration = 1.6, suffix, className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    stiffness: 60,
    damping: 18,
    duration: duration * 1000,
  });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [display, setDisplay] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(to);
      return;
    }
    if (inView) motionVal.set(to);
  }, [inView, motionVal, to, reduce]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => unsub();
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
