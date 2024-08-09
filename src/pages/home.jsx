import { Navbar } from "../components/navbar";
import { Products } from "../components/products";

export function Home() {
  return (
    <>
      <section className="h-screen">
        <Navbar />
        <Products />
      </section>
    </>
  );
}
