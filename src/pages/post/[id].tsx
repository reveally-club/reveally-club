import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import PostContent from "../../components/PostContent";
import { useThread } from "../../hooks/fetcher";

import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const PostDetail = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string, 10);
  const { data, isLoading } = useThread(id);

  return (
    <Layout>
      <section className="w-full max-w-6xl flex p-2 xl:m-4">
        {isLoading ? (
          <Loading />
        ) : (
          <PostContent
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
        )}
      </section>
    </Layout>
  );
};

export default PostDetail;
