import { ReactNode } from "react";
import { Box } from "./layout/box";

export function MainText({ children }: { children: ReactNode }) {
  return (
    <Box
      __maxWidth={900}
      p={2}
      backgroundColor="translucent"
    >
      {children}
    </Box>
  );
}
