import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface AnimSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimSection({
  children,
  className = "",
  delay = 0,
}: AnimSectionProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
