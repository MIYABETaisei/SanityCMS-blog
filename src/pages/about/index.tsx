import Head from "next/head";
import { FC } from "react";
import Header from "src/components/Header";
import Container from "src/layout/Container";

const About: FC = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <h1 className="text-3xl font-bold text-center mt-10">
          This is About page!
        </h1>
      </Container>
    </div>
  );
};

export default About;
