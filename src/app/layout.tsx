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
const env = process.env.NODE_ENV;
// https://fffuel.co/llleaves/
const backgroudImage = "/background.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme
          accentColor="cyan"
          grayColor="mauve"
          style={{
            backgroundImage: `url(${backgroudImage})`,
          }}
        >
          <Container px="4" pt="5">
            <Flex direction="column" gap="9">
              <Banner />
              <Nav />
              {children}
              <Footer />
            </Flex>
          </Container>
          {themePanel && env === "development" && <ThemePanel />}
        </Theme>
      </body>
    </html>
  );
}
