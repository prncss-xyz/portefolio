import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link, Card, Flex } from "@radix-ui/themes";

export function Banner() {
  return (
    <Card style={{ backgroundColor: "var(--accent-9)" }}>
      <Flex justify="between">
        <Link
          weight="bold"
          href="https://www.linkedin.com/in/juliette-lamarche-2295a4248/"
        >
          Open to work!
        </Link>
        <Flex gap="3">
          <Link href="https://www.linkedin.com/in/juliette-lamarche-2295a4248/">
            <LinkedInLogoIcon />
          </Link>
          <Link href="https://github.com/prncss-xyz/">
            <GitHubLogoIcon />
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}