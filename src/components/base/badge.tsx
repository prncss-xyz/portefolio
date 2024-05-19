import { Box, BoxProps } from "../layout/box";
import { badgeRecipe, BadgeVariants } from "./badge.css";

type Props = {
  children: React.ReactNode;
} & BadgeVariants &
  Omit<BoxProps, "color">;

export function Badge({
  children,
  size = 1,
  kind = "solid",
  color = "accent",
  ...props
}: Props) {
  return (
    <Box className={badgeRecipe({ size, kind, color })} {...props}>
      {children}
    </Box>
  );
}
