import { globalStyle, style } from "@vanilla-extract/css";
import { atoms } from "../../../atoms.css";

export const link = style([
  {
    all: "unset",
  },
  atoms({
    fontWeight: "bold",
    color: "accent11",
  }),
]);

globalStyle(`${link}:hover`, {
  cursor: "pointer",
});
