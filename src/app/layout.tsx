"use client";
import ChakraWrapper from '@/components/chakraWrapper'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body style={{backgroundColor: '#F1F1F7'}}>
        <ChakraWrapper>
          <Header />
          <main>
        {children}
          </main>
          <Footer />
        </ChakraWrapper>
        </body>
    </html>
  )
}
