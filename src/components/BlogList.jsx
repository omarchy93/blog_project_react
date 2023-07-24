import { Link } from "react-router-dom";

const BlogList = (props) => {
  return (
    <div>
      <div className="container mx-auto my-16 p-10">
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.newest.map((item, index) => {
            return (
              <Link
                key={index}
                to={"/details/" + item["id"]}
                className="card w-100 glass"
              >
                <figure>
                  <img src={item["img"]} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-titel">{item["title"]}</h2>
                  <p>{item["short"]}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
