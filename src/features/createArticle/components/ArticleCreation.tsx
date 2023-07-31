import React from "react";
import AdminHead from "../../../UI/AdminHead";
import UploadImage from "./UploadImage";

const ArticleCreation = () => {
  return (
    <div>
      <AdminHead title="Create new article" buttonName="publish article" />
      <UploadImage />
    </div>
  );
};

export default ArticleCreation;
