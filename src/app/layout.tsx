import type { Metadata } from "next";
import { Inter, Lora, Nunito, Rubik, Source_Sans_3 } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme, ThemePanel, Container, Flex } from "@radix-ui/themes";
import { Footer } from "@/components/footer";
import { Banner } from "@/components/banner";
import { Nav } from "@/components/nav";
import { basePath } from "@/basePath";

/*
const font = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-default",
});
*/

/*
const font = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-default",
});
*/

/*
const font = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-default",
});
*/

const font = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-default",
});

export const metadata: Metadata = {
  title: "Juliette Lamarche portefolio",
  description: "Juliette's portefolio website",
};

const themePanel = false && process.env.NODE_ENV === "development";
// https://fffuel.co/llleaves/
const backgroudImage = basePath + "/background.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body
        style={{
          margin: 0,
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
  );
}
