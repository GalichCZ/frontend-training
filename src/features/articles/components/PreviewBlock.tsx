import { FC } from "react";
import { Link } from "react-router-dom";
import CreatorSpan from "../../../UI/CreatorSpan";

interface Props {
  imgUrl: string;
  title: string;
  creator: string;
  date: string;
  description: string;
  comments: number;
  articleId: string;
}

const PreviewBlock: FC<Props> = ({
  imgUrl,
  title,
  creator,
  date,
  description,
  comments,
  articleId,
}) => {
  return (
    <article className="preview-block">
      <img src={imgUrl} alt="" />
      <div className="preview-block--info">
        <h4>{title}</h4>
        <CreatorSpan creator={creator} date={date} />
        <p>{description}</p>
        <div>
          <Link to={`/article/${articleId}`}>Read whole article</Link>
          <span>{comments} comments</span>
        </div>
      </div>
    </article>
  );
};

export default PreviewBlock;
