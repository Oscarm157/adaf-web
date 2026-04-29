"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/seo";

const DAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const OPEN_DAYS = new Set([1, 2, 3, 4, 5]); // lun-vie

function parseHM(hm: string): [number, number] {
  const [h, m] = hm.split(":").map(Number);
  return [h, m];
}

function getTijuanaParts(now: Date): { day: number; minutes: number } {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Tijuana",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hh = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const mm = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  return { day: dayMap[wd] ?? 0, minutes: hh * 60 + mm };
}

function nextOpening(day: number): { day: number; label: string } {
  let d = day;
  for (let i = 1; i <= 7; i++) {
    d = (day + i) % 7;
    if (OPEN_DAYS.has(d)) return { day: d, label: DAY_NAMES[d] };
  }
  return { day: 1, label: "lunes" };
}

export function OfficeStatus() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-medium text-muted">
        <span className="block w-[7px] h-[7px] rounded-full bg-muted/40" />
        Cargando…
      </span>
    );
  }

  const [openH, openM] = parseHM(siteConfig.hours.opens);
  const [closeH, closeM] = parseHM(siteConfig.hours.closes);
  const openMin = openH * 60 + openM;
  const closeMin = closeH * 60 + closeM;
  const { day, minutes } = getTijuanaParts(now);

  const isOpen = OPEN_DAYS.has(day) && minutes >= openMin && minutes < closeMin;

  if (isOpen) {
    return (
      <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-medium text-navy">
        <span className="relative flex w-[8px] h-[8px]">
          <span className="absolute inline-flex w-full h-full rounded-full bg-olive opacity-60 animate-ping" />
          <span className="relative inline-flex w-[8px] h-[8px] rounded-full bg-olive" />
        </span>
        Abierto · cierra a las {siteConfig.hours.closes}
      </span>
    );
  }

  const next = nextOpening(day);
  const isToday = OPEN_DAYS.has(day) && minutes < openMin;
  const whenLabel = isToday ? "hoy" : next.label;

  return (
    <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-medium text-muted">
      <span className="block w-[8px] h-[8px] rounded-full bg-navy/35" />
      Cerrado · abre {whenLabel} a las {siteConfig.hours.opens}
    </span>
  );
}
