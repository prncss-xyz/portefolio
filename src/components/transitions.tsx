/* "use client"; */
import { ReactNode } from "react";

export function ProjectTransition({ children }: { children: ReactNode }) {
  return children;
}

/*
import { MotionProvider } from "@/components/motionProvider";
import { m } from "framer-motion";

export function ProjectTransition({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <m.div
        transition={{ duration: 0.7 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {children}
      </m.div>
    </MotionProvider>
  );
}
*/
