import { Box, BoxProps } from "../layout/box";
import { CardVariants, cardRecipe } from "./card.css";

type Props = {
  children: React.ReactNode;
} & CardVariants &
  BoxProps;

export function Card({ size, children, ...props }: Props) {
  props.borderColor ??= "gray9";
  props.backgroundColor ??= "panel";
  return (
    <Box className={cardRecipe({ size })} {...props}>
      {children}
    </Box>
  );
}
