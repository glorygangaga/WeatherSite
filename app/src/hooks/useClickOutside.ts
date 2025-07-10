import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  onOutside: () => void,
  active = true
) {
  useEffect(() => {
    if (!active) return;
    const handler = (e: MouseEvent | PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOutside();
      }
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [active, ref, onOutside]);
}
