import Link from "next/link";
import BackgroundDynamic from "../components/Background/Dynamic";
import styles from "../styles/Page.module.css";
import Head from "next/head";

export default function Studio() {
  return (
    <>
      <Head>
        <title>STUDIO</title>
        <meta property="description" content="the space for yaytso gallery" />
        <meta property="og:title" content="STUDIO" key="title" />
        <meta property="og:description" content="the space for yaytso gallery" />
        <meta property="og:image" content="og-image.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>STUDIO</h1>
        <div className="difference" style={{ maxWidth: 800, zIndex: 1, paddingBottom: 50 }}>
          <div className={styles.block}>
            yaytso is located in sunny Los Angeles California @
            <a
              style={{
                color: "red",
                textDecoration: "underline",
              }}
              href={lacyGmaps}
            >
              Lacy Studio Lofts
            </a>
          </div>
          {/* <div className={styles.block}>2684 Lacy St. #109</div>
        <div className={styles.block}>Los Angeles CA 90031</div> */}
          <div className={styles.block}>
            Currently open for people to come by, hang out, work, or do whatever. we&apos;ll even make you coffee.
          </div>
          <div className={styles.block}>
            You can find our contact info here:{" "}
            <Link href="/about">
              <button style={{ fontSize: 50, margin: "30px auto" }}>About</button>
            </Link>
          </div>
        </div>
      </div>
      <BackgroundDynamic />
    </>
  );
}

const lacyGmaps = `https://goo.gl/maps/vJymtbCXceWs43sV6`;
