import {
  BellIcon,
  HeartIcon,
  StarIcon,
  BackpackIcon,
} from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { Flex } from "./layout/flex";
import { Heading } from "./base/heading";
import { Separator } from "./base/separator";
import { colors } from "../../tokens";

const color = colors.gray9;

function Section({
  name,
  Icon,
  children,
}: {
  name: string;
  Icon: () => JSX.Element;
  children: ReactNode;
}) {
  return (
    <Flex direction="y" gap={3}>
      <Flex gap={3} align="center" justify="center">
        <Icon />
        <Heading as="h2">{name}</Heading>
        <Icon />
      </Flex>
      <Flex justify="center">
        <Separator />
      </Flex>
      <Flex wrap="wrap" gap={2} justify="center">
        {children}
      </Flex>
    </Flex>
  );
}

export function RealizationsSection({ children }: { children: ReactNode }) {
  return (
    <Section name="Realizations" Icon={() => <StarIcon color={color} />}>
      {children}
    </Section>
  );
}

export function PackagesSection({ children }: { children: ReactNode }) {
  return (
    <Section name="Packages" Icon={() => <BackpackIcon color={color} />}>
      {children}
    </Section>
  );
}

export function ProjectsSection({ children }: { children: ReactNode }) {
  return (
    <Section name="Projects" Icon={() => <HeartIcon color={color} />}>
      {children}
    </Section>
  );
}

export function TalksSection({ children }: { children: ReactNode }) {
  return (
    <Section name="Talks" Icon={() => <BellIcon color={color} />}>
      {children}
    </Section>
  );
}
