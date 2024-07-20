import { ReactNode } from "react";
import { ProjectTransition } from "./transitions";
import { Card } from "./base/card";
import { Flex } from "./layout/flex";
import { Box } from "./layout/box";
import { Badge } from "./base/badge";
import { Img } from "./next/image";
import { OutLink } from "./base/outLink";

const thumbSize = 100;

export function Project({
  title,
  tags,
  site,
  image,
  source,
  children,
  featured,
}: {
  title: string;
  tags: string[];
  site: string;
  image: string;
  source?: string;
  children: ReactNode;
  featured?: boolean;
}) {
  return (
    <ProjectTransition>
      <Card
        size={2}
        width="card"
        height="card"
        backgroundColor={featured ? "accent2" : undefined}
      >
        <Flex direction="y" gap={3} justify="between" height="100%">
          <Flex direction="y" gap={3}>
            <Box fontWeight="bold" color="accent11">
              {title}
            </Box>
            <Box color="text">{children}</Box>
          </Flex>
          <Flex justify="between" gap={3} align="end">
            <Flex direction="y" gap={3} align="start">
              {source && (
                <OutLink href={source}>
                  <Badge kind="outline" size={2}>
                    Source
                  </Badge>
                </OutLink>
              )}
              <Flex gap={1} wrap="wrap">
                {tags.map((tag) => (
                  <Badge size={1} key={tag}>
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Flex>
            <Flex justify="center">
              <OutLink
                href={site}
                target="_blank"
                __width={`${thumbSize}px`}
                __height={`${thumbSize}px`}
                borderRadius={2}
                overflow="hidden"
              >
                <Img src={image} alt="thumbnail" />
              </OutLink>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </ProjectTransition>
  );
}
