import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../../atoms.css";

export const separatorRecipe = recipe({
  base: atoms({
    borderWidth: 0,
    borderStyle: "bottom",
  }),
  variants: {
    orientation: {
      vertical: atoms({
        mx: 1,
      }),
      horizontal: atoms({
        my: 1,
      }),
    },
  },
});

export type SeparatorVariants = Parameters<typeof separatorRecipe>[0];
