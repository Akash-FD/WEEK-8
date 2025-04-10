import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <div>
      <Head>
        <title>my-about page</title>
        <meta
          name="description"
          content="You really need to read this website because it's made with Next.js"
        />
      </Head>
      <h2>this is about page</h2>
    </div>
  );
};

export default about;
