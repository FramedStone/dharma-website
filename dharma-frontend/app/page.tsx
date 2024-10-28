import About from "@/components/homepage/About";
import Features from "@/components/homepage/Features";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  )
}