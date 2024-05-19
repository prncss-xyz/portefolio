import { BellIcon, HeartIcon, StarIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { Flex } from "./layout/flex";
import { Heading } from "./base/heading";
import { Separator } from "./base/separator";
import { colors } from "../../tokens";

type Variant = 0 | 1 | 2;

const color = colors.gray9;
function Icon({ variant }: { variant: Variant }) {
  switch (variant) {
    case 0:
      return <StarIcon color={color} />;
    case 1:
      return <HeartIcon color={color} />;
    case 2:
      return <BellIcon color={color} />;
  }
}

export function Section({
  name,
  variant,
  children,
}: {
  name: string;
  variant: Variant;
  children: ReactNode;
}) {
  return (
    <Flex direction="y" gap={3}>
      <Flex gap={3} align="center" justify="center">
        <Icon variant={variant} />
        <Heading as="h2">{name}</Heading>
        <Icon variant={variant} />
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
