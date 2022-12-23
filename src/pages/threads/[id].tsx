import { useRouter } from "next/router";
import { useDetailThreadQuery } from "../../modules/reducers/thread";
import Layout from "../common/Layout";
import Loading from "../common/Loading";
import ThreadContent from "./components/ThreadContent";

const ThreadsDetail = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string, 10);
  const { data: thread, isLoading, isFetching } = useDetailThreadQuery(id);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Layout>
      <ThreadContent {...thread!.data} />
    </Layout>
  );
};

export default ThreadsDetail;
