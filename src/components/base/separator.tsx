import { Color } from "../../../tokens";
import { Box, BoxProps } from "../layout/box";
import { SeparatorVariants, separatorRecipe } from "./separator.css";

type Props = {
  color?: Color;
  decorative?: boolean;
} & SeparatorVariants &
  BoxProps;

export function Separator({
  color = "gray8",
  orientation = "horizontal",
  decorative = false,
  ...props
}: Props) {
  if (orientation === "horizontal") props.width ??= "100%";
  if (orientation === "vertical") props.height ??= "100%";
  return (
    <Box
      role={decorative ? undefined : "separator"}
      className={separatorRecipe({ orientation })}
      borderColor={color}
      {...props}
    />
  );
}
