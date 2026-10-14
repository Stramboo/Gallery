import { useState, useCallback } from "react";

export function useLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navigate = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return { isOpen, currentIndex, open, close, navigate };
}
