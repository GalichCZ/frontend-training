import { FC } from "react";
import { Link } from "react-router-dom";
import CreatorSpan from "../../../UI/CreatorSpan";

interface Props {
  imgUrl: string;
  title: string;
  creator: string;
  createdAt: Date;
  description: string;
  numOfComs: number;
  articleId: string;
}

const PreviewBlock: FC<Props> = ({
  imgUrl,
  title,
  creator,
  createdAt,
  description,
  numOfComs,
  articleId,
}) => {
  return (
    <article className="preview-block">
      <img src={imgUrl} alt="" />
      <div className="preview-block--info">
        <h4>{title}</h4>
        <CreatorSpan creator={creator} date={createdAt} />
        <p>{description}</p>
        <div>
          <Link to={`/article/${articleId}`}>Read whole article</Link>
          <span>{numOfComs} comments</span>
        </div>
      </div>
    </article>
  );
};

export default PreviewBlock;
