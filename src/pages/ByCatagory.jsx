import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import Loder from "../components/Loder";
import BlogList from "../components/BlogList";
import { postByCaragory } from "../APIRequest/api";

const ByCatagory = () => {
  const [newest, setNewest] = useState(null);
  const { catagoryID } = useParams();
  useEffect(() => {
    (async () => {
      let res = await postByCaragory(catagoryID);
      setNewest(res);
    })();
  }, [catagoryID]);

  return (
    <Layout>
      {newest === null ? <Loder /> : <BlogList newest={newest} />}
    </Layout>
  );
};

export default ByCatagory;
