import BackgroundDynamic from "../components/Background/Dynamic";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import path from "path";
import { unified } from "unified";
import { read } from "to-vfile";
import { useEffect, useMemo } from "react";
import { mdTokens } from "../lib/utils";

export default function Show({ content }: any) {
  const title = "SHOW";
  const description = "Upcoming show";

  let html = content.replace(mdTokens.img, `<img style="width:100%;" src="/images/lily_banner.png"/>`);

  return (
    <>
      <Head>
        <title>Show</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="og-image.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.header}>{title}</h1>
        <div className={styles.block__bg_wrapper}>
          <div className={styles.block__bg} style={{ maxWidth: 800 }}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
      <BackgroundDynamic />
    </>
  );
}

export async function getStaticProps({ params, preview = false }: any) {
  const markdownDirectory = path.join(process.cwd(), "markdown");
  const dreamPath = path.join(markdownDirectory, "show.md");
  const file = await unified()
    .use(remarkParse)
    // @ts-ignore
    .use(remarkHtml)
    .process(await read(dreamPath));
  return {
    props: {
      content: String(file),
    },
  };
}
