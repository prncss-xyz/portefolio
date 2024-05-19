import { Box, BoxProps } from "../layout/box";
import { HeadingVariants, headingRecipe } from "./heading.css";

type Props = {
  children?: React.ReactNode;
} & HeadingVariants &
  BoxProps;

export function Heading({ children, as = "h1", ...props }: Props) {
  return (
    <Box as={as} className={headingRecipe({ as })} {...props}>
      {children}
    </Box>
  );
}
