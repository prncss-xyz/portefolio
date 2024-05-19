import { ReactNode } from "react";
import { NavVariants, itemInnerRecipe, itemOuterRecipe } from "./tabNav.css";
import { Slot } from "@radix-ui/react-slot";
import { Flex } from "../layout/flex";
import { Box, BoxProps } from "../layout/box";

type Props = {
  asChild?: boolean;
  value: string;
  children: React.ReactNode;
} & NavVariants &
  BoxProps;

export function Link({ asChild, value, active, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Box className={itemOuterRecipe({ active })}>
      <Comp className={itemInnerRecipe({ active })} {...props} />
    </Box>
  );
}

export function Root({ children, ...props }: { children: ReactNode } & BoxProps) {
  return (
    <Flex
      justify="end"
      borderWidth={0}
      borderColor="gray8"
      borderStyle="bottom"
      {...props}
    >
      {children}
    </Flex>
  );
}
