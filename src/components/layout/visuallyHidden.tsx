import { ReactNode } from "react";
import { visuallyHidden } from "./visuallyHidden.css";

export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <div className={visuallyHidden}>{children}</div>;
}
