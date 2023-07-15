import Time from "../components/Time";
import siteConfig from "../config.mjs";
import { externalPosts, getPosts, suggestedPosts } from "../data/posts";
import Layout from "../layouts/page";

export default function Index({ posts }) {
  return (
    <Layout>
      Hello there! I'm Giuseppe.
      <br />
      Independent engineer, creative and thinker.
      <br />
      {siteConfig.available ? (
        <span style={{ display: "block", marginTop: "1em", fontSize: "0.8em" }}>
          → <a href="/contact">Let's work together</a>
        </span>
      ) : null}
      <h2>Blog</h2>
      {posts.map((post) => {
        return (
          <article
            key={post.title}
            style={{ margin: 0, marginBottom: "1.5em", fontSize: "0.9em" }}
          >
            <h3 style={{ margin: 0 }}>
              <a href={post.url} rel="prefetch">
                {post.title}
              </a>
            </h3>
            <div className="ArticleExcerpt-meta">
              <Time date={post.date} />
            </div>
          </article>
        );
      })}
      Read <a href="/blog">more articles</a> →
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: [...getPosts(), ...suggestedPosts, ...externalPosts]
        .filter((p) => p.suggested == true && !p.private && !p.draft)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};
