import type { NextPage } from "next";
import Head from "next/head";
import BackgroundDynamic from "../components/Background/Dynamic";
import EgglineIcon from "../components/Icons/Eggline";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YAYTSO</title>
        <meta name="description" content="YAYTSO Gallery - an interactive art space located in Los Angeles" />
        <meta property="og:image" content="og-image.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>яйцо</div>
        <div
          style={{
            height: "20%",
            width: "30%",
            mixBlendMode: "difference",
            zIndex: 1,
          }}
        >
          <EgglineIcon />
        </div>
        {/* <div className={styles.block}>MEDIA</div> */}
      </div>
      <BackgroundDynamic />
    </>
  );
};

export default Home;
