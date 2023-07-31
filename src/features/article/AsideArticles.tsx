import React from "react";
import AsideArticle from "./AsideArticle";

const title = "Lorem, ipsum dolor.";
const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore architecto dolorem, id minima libero quia magnam accusamus sint sit.";

const AsideArticles = () => {
  return (
    <aside className="article-content--aside">
      <h4>Related articles</h4>
      <AsideArticle title={title} description={desc} />
      <AsideArticle title={title} description={desc} />
      <AsideArticle title={title} description={desc} />
    </aside>
  );
};

export default AsideArticles;
