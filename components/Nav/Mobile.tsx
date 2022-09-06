import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import EgglineIcon from "../Icons/Eggline";
import Links from "./Links";
import styles from "./Nav.module.css";

export default function Mobile() {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [showLinks, setShowLinks] = useState(false);
  const [variants, setVariants] = useState({
    visible: { scale: 1, x: 0, y: 0 },
    hidden: { scale: 0, x: 0, y: 0 },
  });
  const [linkListDims, setLinkListDims] = useState({ width: 0, height: 0 });
  useEffect(() => {
    let linkListDims = { width: 0, height: 0 };
    if (typeof window !== "undefined") {
      linkListDims.width = window.innerWidth;
      linkListDims.height = window.innerHeight;
      setLinkListDims(linkListDims);
    }
    const toggleRect = toggleRef.current?.getBoundingClientRect();
    if (toggleRect) {
      setVariants({
        visible: {
          ...variants.visible,
          x: 0,
          y: 0,
        },
        hidden: {
          ...variants.hidden,
          x: toggleRect.x - linkListDims.width / 2 + toggleRect.width / 2,
          y: toggleRect.y - linkListDims.height / 2 + toggleRect.height / 2,
        },
      });
    }
  }, []);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <button
        ref={toggleRef}
        onClick={toggleLinks}
        className={styles.toggle}
        style={{ borderRadius: showLinks ? "0" : "50%" }}
      ></button>
      <AnimatePresence>
        {showLinks && (
          <motion.div
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            // transition={{ duration: 1 }}
            className={styles.link_list}
            onClick={toggleLinks}
            style={{ width: linkListDims.width, height: linkListDims.height }}
          >
            <Links />
            <Link href="/">
              <div style={{ width: "30%", height: "20%", overflow: "hidden" }}>
                <EgglineIcon color="black" />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
