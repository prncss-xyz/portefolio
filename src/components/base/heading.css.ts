import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../../atoms.css";
import { style } from "@vanilla-extract/css";

export const headingRecipe = recipe({
  base: style([
    {
      margin: 0,
      overflowWrap: "break-word",
    },
    atoms({
      fontWeight: "bold",
    }),
  ]),
  variants: {
    as: {
      h1: atoms({ fontSize: 6 }),
      h2: atoms({ fontSize: 5 }),
      h3: atoms({ fontSize: 4 }),
      h4: atoms({ fontSize: 3 }),
      h5: atoms({ fontSize: 2 }),
      h6: atoms({ fontSize: 1 }),
    },
  },
});

export type HeadingVariants = Parameters<typeof headingRecipe>[0];
