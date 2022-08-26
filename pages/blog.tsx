import Link from "next/link";
import Image from "next/image";
import { getAllPostsForHome } from "../lib/contentful-api";
import BackgroundDynamic from "../components/Background/Dynamic";
import { shimmer, toBase64 } from "../components/Post/utils";

import styles from "../styles/Blog.module.css";

export default function BlogPage({ allPosts }: any) {
  console.log(allPosts);
  return (
    <>
      <div className="difference container">
        {allPosts.map((post: any) => (
          <>
            <div key={post.slug} className={styles.preview_card}>
              <Link href={`/posts/${post.slug}`}>
                <div>
                  <div className="title">{post.title}</div>
                  <Image
                    src={post.coverImage.url}
                    width="500px"
                    height="500px"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                  />
                </div>
              </Link>
            </div>{" "}
            <div key={post.slug} className={styles.preview_card}>
              <Link href={`/posts/${post.slug}`}>
                <div>
                  <div className="title">{post.title}</div>
                  <Image
                    src={post.coverImage.url}
                    width="500px"
                    height="500px"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                  />
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
      <BackgroundDynamic nLines={2} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
