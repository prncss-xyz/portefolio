import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import { basePath } from "@/../basePath.mjs";

export type ImgProps = Omit<ExportedImageProps, "basePath">;

export const Img = (props: ImgProps) => {
  return <ExportedImage {...props} basePath={basePath} />;
};
