import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme, ThemePanel, Container, Flex } from "@radix-ui/themes";
import { Footer } from "@/components/footer";
import { Banner } from "@/components/banner";
import { Nav } from "@/components/nav";
import { cssURL } from "@/utils/cssURL";
import { MotionProvider } from "@/components/motionProvider";

const font = Nunito({
  subsets: ["latin"],
  display: "optional",
  variable: "--base-font",
});

export const metadata: Metadata = {
  title: "Juliette Lamarche portefolio",
  description: "Juliette's portefolio website",
};

const themePanel = false && process.env.NODE_ENV === "development";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MotionProvider>
      <html lang="en" className={font.variable}>
        <body
          style={{
            margin: 0,
            // https://fffuel.co/llleaves/
            backgroundImage: cssURL("/background.svg"),
            width: "100vw",
            height: "100vh",
            backgroundRepeat: "repeat",
            backgroundPositionX: "left",
            backgroundPositionY: "top",
          }}
        >
          <Theme
            accentColor="cyan"
            grayColor="mauve"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <Container px={{ initial: "1", sm: "2", md: "4" }} pt="5" pb="3">
              <Flex direction="column" gap="9">
                <Banner />
                <Nav />
                {children}
                <Footer />
              </Flex>
            </Container>
            {themePanel && <ThemePanel />}
          </Theme>
        </body>
      </html>
    </MotionProvider>
  );
}
