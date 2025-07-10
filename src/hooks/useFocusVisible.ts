import { useCallback, useEffect, useRef, useState } from "react";

export function useIsFocusVisible<T extends HTMLElement>(): [
  React.RefObject<T | null>,
  boolean,
  () => void
] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null); // <-- правильный тип: T, не T | null

  const reset = () => setIsVisible(false);

  const onFocus = useCallback((e: FocusEvent) => {
    if ((e.target as HTMLElement).matches(":focus-visible")) {
      setIsVisible(true);
    }
  }, []);

  const onBlur = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);

    return () => {
      el.removeEventListener("focus", onFocus);
      el.removeEventListener("blur", onBlur);
    };
  }, [onFocus, onBlur]);

  return [ref, isVisible, reset];
}
