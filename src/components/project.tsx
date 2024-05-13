import { Link, Text, Card, Flex, Badge, Box } from "@radix-ui/themes";
import { ReactNode } from "react";
import { ProjectTransition } from "./transitions";
import Image from "next/image";

const cardWidth = 310;
const cardHeigh = 310;
const thumbSize = 100;

export function Project({
  title,
  tags,
  site,
  image,
  source,
  children,
}: {
  title: string;
  tags: string[];
  site: string;
  image: string;
  source?: string;
  children: ReactNode;
}) {
  return (
    <ProjectTransition>
      <Card
        size="2"
        style={{
          backgroundColor: "var(--gray-indicator)",
          width: cardWidth,
          height: cardHeigh,
        }}
      >
        <Flex direction="column" gap="3" justify="between" height="100%">
          <Flex direction="column" gap="3">
            <Text weight="bold" style={{ color: "var(--accent-11)" }}>
              {title}
            </Text>
            <Text style={{ color: "black" }}>{children}</Text>
          </Flex>
          <Flex justify="between" gap="3" align="end">
            <Flex direction="column" gap="3" align="start">
              {source && (
                <Link href={source} target="_blank">
                  <Badge variant="outline" size="3">
                    Source
                  </Badge>
                </Link>
              )}
              <Flex gap="1" wrap="wrap">
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </Flex>
            </Flex>
            <Flex justify="center">
              <Link href={site} target="_blank">
                <Box width={`${thumbSize}px`} height={`${thumbSize}px`}>
                  <Image
                    src={image}
                    alt="thumbnail"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      borderRadius: "var(--radius-2)",
                    }}
                  />
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </ProjectTransition>
  );
}
