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
        <section className="pg-slate-50 w-full h-screen flex flex-col justify-center items-center gap-2 pb-20 md:pb-24 lg:pb-8 lg:ps-32">
          <FaCode className="text-9xl text-blue-500" />
          <h2 className="text-blue-500 font-extrabold sm:text-4xl text-2xl">
            We Are Coding
          </h2>
          <p className="text-slate-400 font-medium text-base sm:text-lg">
            Coming Soon!
          </p>
        </section>
      </motion.div>
    </>
  );
}
