import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { atoms } from "../../../atoms.css";

export const badgeRecipe = recipe({
  base: style([
    {
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      fontStyle: "normal",
      flexShrink: 0,
      lineHeight: 1,
      /* Make sure that the height is not stretched in a Flex/Grid layout */
      height: "fit-content",
    },
    atoms({
      fontWeight: "regular",
    }),
  ]),
  variants: {
    color: {
      accent: {},
      text: {},
    },
    kind: {
      solid: atoms({}),
      outline: atoms({
        borderStyle: "solid",
        borderWidth: 1,
      }),
    },
    size: {
      1: atoms({
        py: 1,
        px: 1,
        borderRadius: 1,
        fontSize: 1,
      }),
      2: atoms({
        py: 2,
        px: 3,
        borderRadius: 2,
        fontSize: 2,
      }),
      3: atoms({
        py: 3,
        px: 4,
        borderRadius: 2,
        fontSize: 2,
      }),
    },
  },
  compoundVariants: [
    {
      variants: { color: "accent", kind: "solid" },
      style: atoms({
        color: "accent11",
        backgroundColor: "accentA3",
      }),
    },
    {
      variants: { color: "accent", kind: "outline" },
      style: atoms({
        color: "accent8",
        borderColor: "accent8",
      }),
    },
    {
      variants: { color: "text", kind: "solid" },
      style: atoms({
        color: "gray1",
        borderColor: "text",
        backgroundColor: "text",
      }),
    },
    {
      variants: { color: "text", kind: "outline" },
      style: atoms({
        color: "text",
      }),
    },
  ],
});

export type BadgeVariants = Parameters<typeof badgeRecipe>[0];
