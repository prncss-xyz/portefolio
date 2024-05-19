import { Box, BoxProps } from "../layout/box";
import { link } from "./link.css";

type Props = {
  children?: React.ReactNode;
} & BoxProps

export function Link({ children, ...props }: Props) {
  return (
    <Box as="a" className={link} {...props}>
      {children}
    </Box>
  );
}
