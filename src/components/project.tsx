"use client";
import { Text, Card, Flex, Badge, Link } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { ReactNode } from "react";

function Ressource({ name, href }: { name: string; href?: string }) {
  if (!href) return null;
  return (
    <Badge variant="outline" size="3">
      <Link
        underline="none"
        style={{ color: "var(--accent-11)" }}
        href={href}
        target="_blank"
      >
        {name}
      </Link>
    </Badge>
  );
}

const cardWidth = 300;
const cardHeigh = 400;

export function Project({
  title,
  tags,
  demo,
  demoLabel,
  source,
  children,
}: {
  title: string;
  tags: string[];
  demo?: string;
  demoLabel?: string;
  source?: string;
  children: ReactNode;
}) {
  return (
    <Card
      size="2"
      style={{
        backgroundColor: "var(--gray-indicator)",
        width: cardWidth,
        height: cardHeigh,
      }}
      asChild
    >
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Flex direction="column" gap="3">
          <Text weight="bold" style={{ color: "var(--accent-11)" }}>
            {title}
          </Text>
          {children}
          <Flex gap="1" wrap="wrap">
            <Ressource name={demoLabel ?? "demo"} href={demo} />
            <Ressource name="source" href={source} />
          </Flex>
          <Flex gap="1" wrap="wrap">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </Flex>
        </Flex>
      </motion.div>
    </Card>
  );
}
