import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme, ThemePanel, Container, Flex } from "@radix-ui/themes";
import { Footer } from "@/components/footer";
import { Banner } from "@/components/banner";
import { Nav } from "@/components/nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juliette Lamarche portefolio",
};

const themePanel = false;
// https://fffuel.co/llleaves/
const backgroudImage = "/background.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        style={{
          backgroundImage: `url(${backgroudImage})`,
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
          <Container px="4" pt="5" pb="3">
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
  );
}
