import { Navbar } from "../components/navbar";
import { FaCode } from "react-icons/fa";

export function Settings() {
  return (
    <>
      <Navbar />
      <section className="pg-slate-50 w-full h-screen flex flex-col justify-center items-center gap-4">
        <FaCode className="text-9xl text-blue-500" />
        <h2 className="text-blue-500 font-extrabold text-4xl">We Are Coding</h2>
        <p className="text-slate-400 font-medium">Coming Soon!</p>
      </section>
    </>
  );
}
