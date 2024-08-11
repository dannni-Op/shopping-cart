export const childVariants = {
  initial: { opacity: 0, y: "50px" },

  final: { opacity: 1, y: "0px", transition: { duration: 0.5, delay: 0.1 } },

  exit: { opacity: 0, y: "-50px", transition: { duration: 0.5 } },
};
