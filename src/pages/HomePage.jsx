import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import BlogList from "../components/BlogList";
import { postNewestPost } from "../APIRequest/api";
import Loder from "../components/Loder";

const HomePage = () => {
  const [newest, setNewest] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postNewestPost();
      setNewest(res);
    })();
  }, []);
  return (
    <Layout>
      {newest === null ? <Loder /> : <BlogList newest={newest} />}
    </Layout>
  );
};

export default HomePage;
