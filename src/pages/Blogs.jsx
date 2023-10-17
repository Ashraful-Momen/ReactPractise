import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "./../data";

function Blogs() {
  const [blogs, setBlogs] = useState(blogData);

  const truncateStr = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;

          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateStr(body, 100)}</p>
              <Link to={title} state={{id,title,body}}>Learn More</Link>  {/* this 'title ' pass where router receive the title varibale */}
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Blogs;
