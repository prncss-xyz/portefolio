export const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 40,
  8: 48,
  9: 64,
  10: 128,
};

export const sizes = {
  0: 0,
  "100%": "100%",
  auto: "auto",
  card: 310,
  screenXS: 448,
  screenSM: 688,
  screenMD: 1024,
  screenLG: 1136,
};

export const fontSizes = {
  1: 12,
  2: 14,
  3: 16,
  4: 18,
  5: 20,
  6: 24,
  7: 28,
  8: 35,
  9: 60,
} as const;

export const borderRadii = { 1: 3, 2: 4, 3: 6, 4: 8, 5: 12, 6: 16 } as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const borderWidths = { 0: 0.5, 1: 1, 2: 2, 3: 5 } as const;

// this is used to set up theme vars; what is not defined in _dark defaults to values from _light
// don't these values directly, use sprinkles or vars.colors from theme.css instead
// colors used this way will respond to (prefers-color-scheme) media queries
// background and colors are also set as background color and default color

// https://github.com/radix-ui/colors/blob/8a03dad3bc93ea4ed48ce2b70847a3538097e02f/src/light.ts#L69

const colors_ = {
  translucent: "hsla(0,0%,100%,.7)",
  panel: "#eeeeee",
  gray1: "#fdfcfd",
  gray2: "#faf9fb",
  gray3: "#f2eff3",
  gray4: "#eae7ec",
  gray5: "#e3dfe6",
  gray6: "#dbd8e0",
  gray7: "#d0cdd7",
  gray8: "#bcbac7",
  gray9: "#8e8c99",
  gray10: "#84828e",
  gray11: "#65636d",
  gray12: "#211f26",
  grayA1: "#55005503",
  grayA2: "#2b005506",
  grayA3: "#30004010",
  grayA4: "#20003618",
  grayA5: "#20003820",
  grayA6: "#14003527",
  grayA7: "#10003332",
  grayA8: "#08003145",
  grayA9: "#05001d73",
  grayA10: "#0500197d",
  grayA11: "#0400119c",
  grayA12: "#020008e0",
  accent1: "#fafdfe",
  accent2: "#f2fafb",
  accent3: "#def7f9",
  accent4: "#caf1f6",
  accent5: "#b5e9f0",
  accent6: "#9ddde7",
  accent7: "#7dcedc",
  accent8: "#3db9cf",
  accent9: "#00a2c7",
  accent10: "#0797b9",
  accent11: "#107d98",
  accent12: "#0d3c48",
  accentA1: "#0099cc05",
  accentA2: "#009db10d",
  accentA3: "#00c2d121",
  accentA4: "#00bcd435",
  accentA5: "#01b4cc4a",
  accentA6: "#00a7c162",
  accentA7: "#009fbb82",
  accentA8: "#00a3c0c2",
  accentA9: "#00a2c7",
  accentA10: "#0094b7f8",
  accentA11: "#007491ef",
  accentA12: "#00323ef2",
};

export const colors = {
  ...colors_,
  text: colors_.gray12,
};

export type Color = keyof typeof colors;
