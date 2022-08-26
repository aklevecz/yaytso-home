import BackgroundDynamic from "../components/Background/Dynamic";
import styles from "../styles/Page.module.css";

export default function Studio() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>STUDIO</div>
        <div className={styles.block}>
          the studio is located in sunny Los Angeles California
        </div>
        <div className={styles.block}>2684 Lacy St. #109</div>
        <div className={styles.block}>Los Angeles CA 90031</div>
      </div>
      <BackgroundDynamic />
    </>
  );
}
