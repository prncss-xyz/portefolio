import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Link, Separator } from "@radix-ui/themes";

export function Footer() {
  return (
    <Flex direction="column" align="center" gap="2">
      <Separator size="4" />
      <Flex gap="3">
        <Link href="https://www.linkedin.com/in/juliette-lamarche-2295a4248/">
          <LinkedInLogoIcon />
        </Link>
        <Link href="https://github.com/prncss-xyz/">
          <GitHubLogoIcon />
        </Link>
      </Flex>
    </Flex>
  );
}
