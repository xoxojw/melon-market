"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cls } from "@/libs/utils";
import Link from "next/link";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

export const FloatingButton = ({ children, href }: FloatingButtonProps) => {
  const isMobile = useIsMobile();
  return (
    <Link href={href}>
      <button className={cls(
        isMobile ? "right-5" : "right-[28%]",
        "fixed bottom-28 bg-melon-300 text-white rounded-full p-4 shadow-lg hover:bg-melon-400 transition ease-in-out duration-200"
      )}>
        {children}
      </button>
    </Link>
  );
};