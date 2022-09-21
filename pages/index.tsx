import type { NextPage } from "next";

import { getAllPostsFrontMatter, sortByDate } from "@lib/utils";
import { PostsFrontMatterType } from "@lib/types";

import Title from "@components/title";
import Section from "@components/section";
import PostsList from "@components/posts-list";
import Seo from "@components/seo";

interface PostsListProps {
  posts: PostsFrontMatterType;
}

const Home: NextPage<PostsListProps> = ({ posts }) => {
  return (
    <Section>
      <Seo />
      <div className="animate-fade">
        <Title>Tawnee&apos;s Garden 🪴</Title>
        <div>
          <p className="mt-6">
            Musings on front-end development, music, books, and personal growth.
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
