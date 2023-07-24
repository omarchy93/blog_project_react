const BlogDetalis = ({ details }) => {
  const post = details.postDetails;
  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
        <div className="card w-100 glass">
          <figure>
            <img src={post.img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetalis;
