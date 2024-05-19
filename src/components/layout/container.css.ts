import { recipe } from "@vanilla-extract/recipes";
import { globalStyle, style } from "@vanilla-extract/css";
import { atoms } from "../../../atoms.css";

globalStyle("html", { boxSizing: "border-box" });
globalStyle("*, *:before, *:after", { boxSizing: "inherit" });
globalStyle("body", { margin: 0 });

globalStyle("a", {
  all: "unset",
});

globalStyle("a:hover", {
  cursor: "pointer",
});

export const containerRecipe = recipe({
  variants: {
    size: {
      1: atoms({
        width: {
          xs: "100%",
          sm: "screenSM",
          md: "screenMD",
          lg: "screenLG",
        },
      }),
    },
  },
});

export const containerOuter = style({
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: 0,
});

export type ContainerVariants = Parameters<typeof containerRecipe>[0];
