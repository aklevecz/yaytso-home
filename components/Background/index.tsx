import { motion } from "framer-motion";

export default function Background({ nLines = 20 }) {
  const variants = {
    visible: (i: any) => ({
      x: 0,
      transition: {
        delay: i * 0.0,
        duration: 1,
      },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 0,
        // mixBlendMode: "difference",
      }}
    >
      {Array(nLines)
        .fill(null)
        .map((_, i) => {
          const windowHeight =
            typeof window !== "undefined" ? window.innerHeight : 600;
          return (
            <motion.div
              key={i}
              custom={i}
              animate={"visible"}
              variants={variants}
              style={{
                x: i % 2 ? 1000 : -1000,
                background: i % 2 ? "white" : "black",
                width: "100%",
                height: windowHeight / nLines,
                zIndex: -1,
              }}
            ></motion.div>
          );
        })}
    </div>
  );
}
