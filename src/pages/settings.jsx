import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { childVariants } from "../motions/motions";

export function Settings() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="final"
        exit="exit"
        variants={childVariants}
      >
        <section className="relative pg-slate-50 w-full h-screen flex flex-col justify-center items-center gap-2 lg:pb-8 lg:ps-32">
          <FaCode className="text-7xl md:text-8xl text-blue-500" />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-500 font-extrabold">
            We Are Coding
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-400 font-medium">
            Coming Soon!
          </p>
        </section>
      </motion.div>
    </>
  );
}
