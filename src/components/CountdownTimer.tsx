"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate, label }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
          <div key={unit} className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-white">--</span>
            </div>
            <p className="mt-2 text-xs text-white/50 uppercase tracking-wider">{unit}</p>
          </div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className="text-center">
        <p className="font-heading text-2xl font-bold text-gold">Event Started</p>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div>
      {label && (
        <p className="text-center text-sm text-white/60 uppercase tracking-wider mb-6">
          {label}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 text-xs text-white/50 uppercase tracking-wider">
                {unit.label}
              </p>
            </div>
            {i < units.length - 1 && (
              <span className="text-white/30 text-xl font-light mb-6">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
