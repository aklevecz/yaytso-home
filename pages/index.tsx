import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import BackgroundDynamic from "../components/Background/Dynamic";
import EgglineIcon from "../components/Icons/Eggline";
import styles from "../styles/Home.module.css";

const GDPR = 1;
const GDPR_PD = 1;
const GDPR_CONSENT_278 = 1;
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YAYTSO</title>
        <meta
          name="description"
          content="YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO YAYTSO "
        />
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
      <Script src="https://pixel.adsafeprotected.com/rjss/st/1170009/66570547/skeleton.js" />
    </>
  );
};

export default Home;
