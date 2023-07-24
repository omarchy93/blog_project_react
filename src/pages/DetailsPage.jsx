import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import Loder from "../components/Loder";
import { postDetails } from "../APIRequest/api";
import BlogDetalis from "../components/BlogDetalis";

const DetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    (async () => {
      let res = await postDetails(postId);
      setDetails(res);
    })();
  }, [postId]);
  return (
    <Layout>
      {details === null ? <Loder /> : <BlogDetalis details={details} />}
    </Layout>
  );
};

export default DetailsPage;
