import fs from "fs";
import Link from "next/link";
import BackgroundDynamic from "../components/Background/Dynamic";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import { remark } from "remark";
import html from "remark-html";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import path from "path";
import { unified } from "unified";
import { read } from "to-vfile";

export default function Studio({ content }: any) {
  const description = "interactive dream therapy experiments";

  return (
    <>
      <Head>
        <title>Dreams</title>
        <meta property="description" content={description} />
        <meta property="og:title" content="DREAMS" key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="og-image.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>DREAMS</h1>
        <div
          style={{ position: "absolute", zIndex: 1, top: 80, background: "black", padding: 20, left: 0 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <BackgroundDynamic />
    </>
  );
}

export async function getStaticProps({ params, preview = false }: any) {
  const markdownDirectory = path.join(process.cwd(), "markdown");
  const dreamPath = path.join(markdownDirectory, "dreams.md");
  const file = await unified()
    .use(remarkParse)
    // @ts-ignore
    .use(remarkHtml)
    .process(await read(dreamPath));
  console.log(file);
  return {
    props: {
      content: String(file),
    },
  };
}

const lacyGmaps = `https://goo.gl/maps/vJymtbCXceWs43sV6`;

/**
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
<div className={styles.block}>
  Currently open for people to come by, hang out, work, or do whatever. we&apos;ll even make you coffee.
</div>
<div className={styles.block}>
  You can find our contact info here:{" "}
  <Link href="/about">
    <button style={{ fontSize: 50, margin: "30px auto" }}>About</button>
  </Link>
</div>
</div> */
