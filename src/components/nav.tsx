import { Root } from "./base/tabNav";
import { NavLink } from "./navLink";

export function Nav() {
  return (
    <Root justify="end">
      <NavLink href="/">about</NavLink>
      <NavLink href="/blog">blog</NavLink>
    </Root>
  );
}
