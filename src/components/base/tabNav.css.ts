import { recipe } from "@vanilla-extract/recipes";
import { globalStyle } from "@vanilla-extract/css";
import { atoms } from "../../../atoms.css";
import { colors } from "../../../tokens";

export const itemInner = atoms({
  px: 2,
  py: 1,
  fontSize: 2,
  borderRadius: 2,
});

globalStyle(`${itemInner}:hover`, {
  backgroundColor: colors.grayA3,
});

export const itemOuterRecipe = recipe({
  base: atoms({
    px: 2,
    pb: 3,
  }),
  variants: {
    active: {
      true: atoms({
        borderWidth: 2,
        borderStyle: "bottom",
        borderColor: "accent9",
      }),
      false: atoms({}),
    },
  },
});

export type NavVariants = Parameters<typeof itemOuterRecipe>[0];
