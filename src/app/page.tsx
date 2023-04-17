import { About, Header, Hero, Products } from "@/components";

export default function Home() {
  return (
    <div className="container mx-auto px-24 py-11">
      <Header />
      <Hero />
      <Products />
      <About />
    </div>
  );
}
