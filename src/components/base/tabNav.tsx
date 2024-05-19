import { ReactNode } from "react";
import { NavVariants, itemInner, itemOuterRecipe } from "./tabNav.css";
import { Flex } from "../layout/flex";
import { Box, BoxProps } from "../layout/box";

type Props = {
  value: string;
  children: React.ReactNode;
} & NavVariants &
  BoxProps;

export function Link({ children, value, active, ...props }: Props) {
  return (
    <Box className={itemOuterRecipe({ active })}>
      <Box className={itemInner} {...props}>
        {children}
      </Box>
    </Box>
  );
}

export function Root({
  children,
  ...props
}: { children: ReactNode } & BoxProps) {
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
