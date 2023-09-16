import useDevice from "../../hooks/useDevice";
import Desk from "./Desk";
import Mobile from "./Mobile";
import styles from "./Nav.module.css";

export default function Nav() {
  const { isMobile } = useDevice();

  return (
    <nav
      className={styles.container}
      style={{
        position: isMobile ? "unset" : "relative",
        height: isMobile ? "10px" : "5%",
      }}
    >
      {!isMobile && <Desk />}
      {isMobile && <Mobile />}
    </nav>
  );
}
