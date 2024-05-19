import { createBox } from "@dessert-box/react";
import { atoms } from "../../../atoms.css";

export const Flex = createBox({
  atoms,
  defaultClassName: atoms({ display: "flex" }),
});
