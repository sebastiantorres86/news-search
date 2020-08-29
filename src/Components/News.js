import React from "react";
import PropTypes from "prop-types";

const News = ({ newsItem }) => {
  // Extract the data
  const { urlToImage, url, title, description, source } = newsItem;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}

        <div className="card-content">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-efect waves-light btn"
          >
            See full news
          </a>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default News;
