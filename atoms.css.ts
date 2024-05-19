import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import {
  sizes,
  space,
  borderWidths,
  fontWeights,
  fontSizes,
  borderRadii,
  colors,
} from "./tokens";

const overflow = ["scroll", "hidden"] as const;
const shrink = [0, 1] as const;

// following [stitches](https://stitches.dev/docs/tokens) conventions for property-token relationships
const unconditionalProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
    borderWidth: borderWidths,
    minWidth: sizes,
    maxWidth: sizes,
    minHeight: sizes,
    maxHeight: sizes,
    fontWeight: fontWeights,
    fontFamily: ["monospace"],
    overflowX: overflow,
    overflowY: overflow,
    overflow: overflow,
    flexShrink: shrink,
    flexGrow: shrink,
    textAlign: ["center"],
  },
  shorthands: {
    shrink: ["flexShrink"],
    grow: ["flexGrow"],
  },
});

export const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { "@media": "screen and (min-width: 728px)" },
    md: { "@media": "screen and (min-width: 1024px)" },
    lg: { "@media": "screen and (min-width: 1280px)" },
    xl: { "@media": "screen and (min-width: 1640px)" },
  },
  defaultCondition: "xs",
  properties: {
    width: sizes,
    height: sizes,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    borderRadius: borderRadii,
    borderStyle: {
      solid: "solid",
      bottom: "none none solid none",
      top: "solid none none none",
    },
    flexDirection: {
      x: "row",
      y: "column",
    },
    fontSize: fontSizes,
    flexWrap: ["wrap", "nowrap", "wrap-reverse"],
    display: ["none", "inline", "flex"],
    alignItems: {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      baseline: "baseline",
      stretch: "stretch",
    },
    justifyContent: {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      between: "space-between",
    },
    gap: space,
    columnGap: space,
    rowGap: space,
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    pb: ["paddingBottom"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pl: ["paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    gapX: ["columnGap"],
    gapY: ["rowGap"],
    align: ["alignItems"],
    justify: ["justifyContent"],
    direction: ["flexDirection"],
    wrap: ["flexWrap"],
  },
});

export const atoms = createSprinkles(
  responsiveProperties,
  unconditionalProperties,
);

export type Atoms = Parameters<typeof atoms>[0];
