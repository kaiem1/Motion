import Header from "@/components/Header/header";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Body from "@/components/Body/Body";
import ScrollBox from "@/components/shared/ScrollBox";
import AnimatedText from "@/components/shared/AnimatedText";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div>
          <main style={{ padding: "2rem" }}>
      <AnimatedText text="Welcome to GSAP without SplitText!" />
    </main>
       </div>
        <Header />
         <main>
      <h1>Hello GSAP!</h1>
       <Body/>
    </main>
    <div>
       <main>
      <h1 style={{ textAlign: "center" }}>Welcome to GSAP Scroll Animation</h1>
      <div style={{ height: "100vh" }} />
      <ScrollBox/>
      <div style={{ height: "100vh" }} />
    </main>
    </div>
       
          {children}
       
        <Footer />
      </body>
    </html>
  );
}
