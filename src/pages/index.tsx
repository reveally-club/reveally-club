import { ThreadState, useListThreadsQuery } from "../modules/reducers/thread";
import Layout from "./common/Layout";
import Loading from "./common/Loading";
import ThreadCard from "./threads/components/ThreadCard";
import { useRouter } from "next/router";

const Home = () => {
  const { data: thread, isLoading } = useListThreadsQuery();

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container flex flex-col gap-4 m-4">
          {thread?.data.data.map((data: ThreadState, index: number) => (
            <ThreadCard key={index} {...data} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
