import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PostType } from "@lib/types";
import { getAllSlugs, getPostDataBySlug } from "@lib/utils";
import components from "@lib/markdown-components";

import Title from "@components/title";
import Section from "@components/section";
import HomeLink from "@components/home-link";
import Tag from "@components/tag";
import Seo from "@components/seo";

interface PageParams {
  params: {
    slug: string;
  };
}

const Post: NextPage<PostType> = ({ title, category, excerpt, content }) => {
  return (
    <Section tag="main">
      <Seo title={title} description={excerpt} />

      <div className="animate-fade relative">
        <HomeLink />
        <Title>{title}</Title>
        <Tag>{category}</Tag>

        <div className="blog mt-14">
          <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </Section>
  );
};

export default Post;

export async function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PageParams) {
  const { slug } = params;
  const post = getPostDataBySlug(slug);

  return {
    props: post,
  };
}
