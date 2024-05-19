import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";
import { Img, ImgProps } from "./components/next/image";
import { Heading } from "./components/base/heading";
import { Box } from "./components/layout/box";
import { OutLink } from "./components/base/outLink";

const h1 = (props: { children?: ReactNode }) => <Heading as="h1" {...props} />;
const h2 = (props: { children?: ReactNode }) => <Heading as="h2" {...props} />;
const h3 = (props: { children?: ReactNode }) => <Heading as="h3" {...props} />;
const h4 = (props: { children?: ReactNode }) => <Heading as="h4" {...props} />;
const h5 = (props: { children?: ReactNode }) => <Heading as="h5" {...props} />;
const h6 = (props: { children?: ReactNode }) => <Heading as="h6" {...props} />;
const p = (props: { children?: ReactNode }) => <Box as="p" my={4} {...props} />;
const a = (props: { href?: string; children?: ReactNode }) => (
  <OutLink {...props} />
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Img
        sizes="100vw"
        style={{ maxWidth: "100%", height: "auto" }}
        {...(props as ImgProps)}
      />
    ),
    ...components,
  };
}
