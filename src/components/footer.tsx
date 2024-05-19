import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex } from "./layout/flex";
import { Separator } from "./base/separator";
import { VisuallyHidden } from "./layout/visuallyHidden";
import { OutLink } from "./base/outLink";

export function Footer() {
  return (
    <Flex direction="y" align="center" gap={2} color="accent11">
      <Separator />
      <Flex gap={3}>
        <OutLink href="https://www.linkedin.com/in/juliette-lamarche-2295a4248/">
          <LinkedInLogoIcon />
          <VisuallyHidden>LinkedIn</VisuallyHidden>
        </OutLink>
        <OutLink href="https://github.com/prncss-xyz/">
          <GitHubLogoIcon />
          <VisuallyHidden>Github</VisuallyHidden>
        </OutLink>
      </Flex>
    </Flex>
  );
}
