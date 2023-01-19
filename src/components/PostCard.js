import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostCard({ post }) {
  const {
    title,
    date,
    slug,
    author: {
      node: { name: authorName }
    },
    featuredImage
  } = post;

  return (
    <div className="col-12 col-md-6 col-xl-3 mb-5">
      <Link to={`/blog/${slug}`}>
        <div
          className="item"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${featuredImage.node.sourceUrl})`
          }}
        >
          <div className="cont">
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
