import { useEffect, useLayoutEffect } from "react";

// useLayoutEffect en cliente, useEffect en servidor (evita el warning de SSR).
export const useLayoutEffectIsomorphic =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
