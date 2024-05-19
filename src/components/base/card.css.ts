import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../../atoms.css";

export const cardRecipe = recipe({
  base: atoms({
    borderWidth: 1,
    borderStyle: "solid",
  }),
  variants: {
    size: {
      1: atoms({ borderRadius: 4, p: 3 }),
      2: atoms({ borderRadius: 4, p: 4 }),
      3: atoms({ borderRadius: 5, p: 5 }),
      4: atoms({ borderRadius: 5, p: 6 }),
      5: atoms({ borderRadius: 6, p: 8 }),
    },
  },
});

export type CardVariants = Parameters<typeof cardRecipe>[0];
