import { Link } from "./link";
import { BoxProps } from "../layout/box";

type Props = {
  children?: React.ReactNode;
} & BoxProps;

export function OutLink({ children, ...props }: Props) {
  return (
    <Link target="_blank" {...props}>
      {children}
    </Link>
  );
}
