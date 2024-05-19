import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import { basePath } from "@/../basePath.mjs";
import { img } from "./image.css";

export type ImgProps = Omit<ExportedImageProps, "basePath">;

export function Img(props: ImgProps) {
  return <ExportedImage {...props} basePath={basePath} className={img} />;
}
