import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imgurl ? imgurl : "https://www.placeholder.com/304"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a
              href={newsUrl}
              target={"_blank"}
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
