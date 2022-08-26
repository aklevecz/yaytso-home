import Links from "./Links";
import styles from "./Nav.module.css";
export default function Desk() {
  return (
    <div className={styles.link_list__desk}>
      <div style={{ flex: "0 0 40%" }} />
      <Links />
    </div>
  );
}
