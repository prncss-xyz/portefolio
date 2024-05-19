import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Footer } from "@/components/footer";
import { Banner } from "@/components/banner";
import { cssURL } from "@/utils/cssURL";
import { Container } from "@/components/layout/container";
import { Flex } from "@/components/layout/flex";
import { Nav } from "@/components/nav";

const font = Nunito({
  subsets: ["latin"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Juliette Lamarche portefolio",
  description: "Juliette's portefolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body
        style={{
          // https://fffuel.co/llleaves/
          width: "100vw",
          height: "100vh",
          backgroundImage: cssURL("/background.svg"),
          backgroundRepeat: "repeat",
          backgroundPositionX: "left",
          backgroundPositionY: "top",
        }}
      >
        <Container px={{ xs: 1, sm: 2, md: 4 }} pt={5} pb={3}>
          <Flex
            direction="y"
            gap={10}
            style={{
              lineHeight: 1.5,
            }}
          >
            <Banner />
            <Flex direction="y" gap={9}>
              <Nav />
              {children}
            </Flex>
            <Footer />
          </Flex>
        </Container>
      </body>
    </html>
  );
}
