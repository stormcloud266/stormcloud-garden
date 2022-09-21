import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  article?: boolean;
}

const Seo = ({ title, description, url, article = false }: Props) => {
  const pageTitle = title || "Tawnee's Garden";
  const pageDesc =
    description ||
    "Musings on front-end development, music, books, and personal growth.";
  const pageUrl = url
    ? `https://garden.tawnee.dev/${url}`
    : "https://garden.tawnee.dev/";
  const imageUrl = "https://garden.tawnee.dev/card.png";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />

      {/***********  twitter cards ***********/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={imageUrl} />

      {/***********  open graph ***********/}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={imageUrl} />
    </Head>
  );
};

export default Seo;
