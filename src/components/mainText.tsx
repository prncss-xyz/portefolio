import { Box } from "@radix-ui/themes";
import { ReactNode } from "react";

export function MainText({ children }: { children: ReactNode }) {
  return (
    <Box
      maxWidth="900px"
      p="2"
      style={{backgroundColor: "var(--color-panel-translucent)"}}
    >
      {children}
    </Box>
  );
}
