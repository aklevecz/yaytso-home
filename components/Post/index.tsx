import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import BackgroundDynamic from "../Background/Dynamic";

import styles from "./Post.module.css";
import { shimmer, toBase64 } from "./utils";

const customMarkdownOptions = (content: any) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <Image
        id={node.data.target.sys.id}
        src={content.links.assets.block[0].url}
        layout="intrinsic"
        alt={content.links.assets.block[0].description}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        width={"200px"}
        height={"200px"}
        className={styles.img}
      />
    ),
    [BLOCKS.PARAGRAPH]: (node: any) => (
      <div className={styles.block}>{node.content[0].value}</div>
    ),
  },
});

export default function Post({ post }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{post.title}</div>
        <div>
          {documentToReactComponents(
            post.content.json,
            customMarkdownOptions(post.content)
          )}
        </div>
      </div>
      <BackgroundDynamic nLines={2} />
    </>
  );
}
