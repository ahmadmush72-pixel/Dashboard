import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Reveal({
  className,
  children,
  threshold = 0.15,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0 transition-all duration-700 ease-out",
        visible && "opacity-100 translate-y-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
