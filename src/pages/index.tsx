import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";
import { useThreads } from "../hooks/fetcher";
import { IThread } from "../types";

import Layout from "../components/Layout";

const Home = () => {
  const { data, isLoading, setSize } = useThreads();
  function handleScroll() {
    if (
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.scrollHeight
    ) {
      setSize((size: number) => size + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <section
        id="post"
        className="container max-w-6xl flex flex-col gap-4 p-2 xl:m-4"
      >
        {isLoading ? (
          <Loading />
        ) : (
          data.map((data: IThread) => (
            <PostCard
              key={data.id}
              id={data.id}
              title={data.title}
              summary={data.summary}
              content={data.content}
              author={data.author}
              totalReward={data.totalReward}
              rewardCount={data.rewardCount}
              thumbnail={data.thumbnail}
              participant={data.participant}
            />
          ))
        )}
      </section>
    </Layout>
  );
};

export default Home;
