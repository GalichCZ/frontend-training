import React from "react";
import PreviewBlock from "./PreviewBlock";
import imgCat from "../../../assets/img.png";
const desc =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit, amet consectetur adipisicing elit. In corrupti iure quo est quam culpa quasi eum vitae commodi illo!";

const ArticlesContent = () => {
  return (
    <>
      <PreviewBlock
        imgUrl={imgCat}
        title="Title number one"
        creator="Jhon Reed"
        date="27/11/2023"
        description={desc}
        comments={4}
        articleId="id1"
      />
      <PreviewBlock
        imgUrl={imgCat}
        title="Title number one"
        creator="Jhon Reed"
        date="27/11/2023"
        description={desc}
        comments={4}
        articleId="id2"
      />
    </>
  );
};

export default ArticlesContent;
