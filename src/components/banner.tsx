import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Card } from "./base/card";
import { Flex } from "./layout/flex";
import { VisuallyHidden } from "./layout/visuallyHidden";
import { OutLink } from "./base/outLink";

export function Banner() {
  return (
    <Card
      backgroundColor="accent5"
      borderColor="accent11"
      color="accent11"
      size={2}
    >
      <Flex justify="between" fontWeight="bold" align="center">
        <OutLink href="https://www.linkedin.com/in/juliette-lamarche-2295a4248/">
          Open to work!
        </OutLink>
        <Flex
          gap={3}
          align="center"
          style={{
            position: "relative",
            top: 2,
          }}
        >
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
    </Card>
  );
}
