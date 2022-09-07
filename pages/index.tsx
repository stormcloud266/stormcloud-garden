import type { NextPage } from "next";
import Head from "next/head";

import { getAllPostsFrontMatter, sortByDate } from "@lib/utils";
import { PostsFrontMatterType } from "@lib/types";

import Title from "@components/title";
import Section from "@components/section";
import PostsList from "@components/posts-list";

interface PostsListProps {
  posts: PostsFrontMatterType;
}

const Home: NextPage<PostsListProps> = ({ posts }) => {
  return (
    <Section>
      <Head>
        <title>Stormcloud&apos;s Garden</title>
      </Head>
      <div className="animate-fade">
        <Title>Stormcloud&apos;s Garden 🪴</Title>
        <div>
          <p className="mt-6">
            Catch me on{" "}
            <a
              href="https://twitter.com/stormcloud266"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            .
          </p>
        </div>
        <PostsList posts={posts} />
      </div>
    </Section>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPostsFrontMatter();

  return {
    props: { posts: sortByDate(posts) },
  };
}
