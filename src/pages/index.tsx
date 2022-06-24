import Header from "src/components/Header";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { sanityClient } from "src/utils/createClient";
import { urlFor } from "src/utils/imageUrlFor";
import Container from "src/layout/Container";

interface Props {
  posts: [PostItem];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-gray-500 py-10">
        <div className="flex items-center justify-start md:justify-around max-w-7xl mx-auto px-2 min-h-[200px]">
          <h1 className="text-3xl font-bold text-white font-sans inline-block py-2 px-4 md:translate-y-[-50px]">
            Study Next.js and TypeScript,
            <br /> Sanity CMS, Tailwind css
          </h1>
          <img
            className="hidden md:inline-flex w-96"
            src="/img-main.png"
            alt=""
          />
        </div>
      </div>
      {/* Posts */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <a className="group rounded-lg overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-xl font-bold">{post.title}</p>
                    <p className="text-md">
                      {post.description} by {post.author.name}
                    </p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={
                      post.author.image ? urlFor(post.author.image).url() : ""
                    }
                    alt=""
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
