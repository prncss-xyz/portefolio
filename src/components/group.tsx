import { Flex, Heading, Separator } from "@radix-ui/themes";
import { BellIcon, HeartIcon, StarIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

const color = "var(--gray-9)";
function Icon({ variant }: { variant: number }) {
  switch (variant) {
    case 0:
      return <StarIcon color={color} />;
    case 1:
      return <HeartIcon color={color} />;
    default:
      return <BellIcon color={color} />;
  }
}

export function Group({
  name,
  variant,
  children,
}: {
  name: string;
  variant: number;
  children: ReactNode;
}) {
  return (
    <Flex direction="column" gap="3">
      <Flex gap="2" align="center" justify="center">
        <Icon variant={variant} />
        <Heading as="h2">{name}</Heading>
        <Icon variant={variant} />
      </Flex>
      <Flex justify="center">
        <Separator size="4" />
      </Flex>
      <Flex wrap="wrap" gap="2" justify="center">
        {children}
      </Flex>
    </Flex>
  );
}
