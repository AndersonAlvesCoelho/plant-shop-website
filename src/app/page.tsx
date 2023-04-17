import { About, Categories, Clients, Footer, Header, Hero, Products } from "@/components";

export default function Home() {
  return (
    <div className="container mx-auto px-24">
      <Header />
      <Hero />
      <Products />
      <About />
      <Categories />
      <Clients />
      <Footer />
    </div>
  );
}
