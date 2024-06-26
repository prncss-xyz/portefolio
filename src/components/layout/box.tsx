import { createBox, } from "@dessert-box/react";
import { atoms } from "../../../atoms.css";

export const Box = createBox({
  atoms,
});

export type BoxProps = Parameters<typeof Box>[0];
