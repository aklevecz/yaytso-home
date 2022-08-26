import Post from "../../components/Post";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../lib/contentful-api";

export default function PostPage({ post, morePosts }: any) {
  if (!post) {
    return <div>errr</div>;
  }
  return <Post post={post} />;
}

export async function getStaticProps({ params, preview = false }: any) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }: any) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
