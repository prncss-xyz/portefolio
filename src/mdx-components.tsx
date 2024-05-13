import {
  Blockquote,
  Code,
  Em,
  Heading,
  Link,
  Quote,
  Strong,
  Text,
} from "@radix-ui/themes";
import type { MDXComponents } from "mdx/types";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import { ReactNode } from "react";
import { basePath } from "./basePath";

const h1 = (props: { children?: ReactNode }) => <Heading as="h1" {...props} />;
const h2 = (props: { children?: ReactNode }) => <Heading as="h2" {...props} />;
const h3 = (props: { children?: ReactNode }) => <Heading as="h3" {...props} />;
const h4 = (props: { children?: ReactNode }) => <Heading as="h4" {...props} />;
const h5 = (props: { children?: ReactNode }) => <Heading as="h5" {...props} />;
const h6 = (props: { children?: ReactNode }) => <Heading as="h6" {...props} />;
const p = (props: { children?: ReactNode }) => (
  <Text as="p" my="4" {...props} />
);
const blockquote = (props: { children?: ReactNode }) => (
  <Blockquote {...props} />
);
const code = (props: { children?: ReactNode }) => <Code {...props} />;
const em = (props: { children?: ReactNode }) => <Em {...props} />;
// TODO: internal links
const a = ({ href, ...props }: { href?: string; children?: ReactNode }) => (
  <Link href={href ?? ""} weight="bold" target="_blank" {...props} />
);
// TODO: hr
const quote = (props: { children?: ReactNode }) => <Quote {...props} />;
const strong = (props: { children?: ReactNode }) => <Strong {...props} />;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    code,
    em,
    quote,
    strong,
    a,
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <ExportedImage
        basePath={basePath}
        sizes="100vw"
        style={{ maxWidth: "100%", height: "auto" }}
        {...(props as ExportedImageProps)}
      />
    ),
    ...components,
  };
}
