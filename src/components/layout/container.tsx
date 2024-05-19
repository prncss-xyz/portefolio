import { Box, BoxProps } from "./box";
import {
  ContainerVariants,
  containerOuter,
  containerRecipe,
} from "./container.css";

type Props = {
  children: React.ReactNode;
} & ContainerVariants &
  BoxProps;

export function Container({ children, size = 1, ...props }: Props) {
  props.fontSize ??= 3;
  props.color ??= "text";
  return (
    <div className={containerOuter}>
      <Box className={containerRecipe({ size })} {...props}>
        {children}
      </Box>
    </div>
  );
}
