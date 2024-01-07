"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import { NavItem } from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  return (
    <div ref={navRef} className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === 1) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = activeIndex === index;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};
