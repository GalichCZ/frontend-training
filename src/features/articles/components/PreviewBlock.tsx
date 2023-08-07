import { FC } from "react";
import { Link } from "react-router-dom";
import useGetImage from "../../../hooks/useGetImage";
import CreatorSpan from "../../../UI/CreatorSpan";
import Loader from "../../../UI/Loader";
import { stringCut } from "../../../utils/stringCut";

interface Props {
  imgId: string;
  title: string;
  creator: string;
  createdAt: Date;
  description: string;
  numOfComs: number;
  articleId: string;
}

const PreviewBlock: FC<Props> = ({
  imgId,
  title,
  creator,
  createdAt,
  description,
  numOfComs,
  articleId,
}) => {
  const { imageUrl, loading } = useGetImage(imgId);
  return (
    <article className="preview-block">
      {!loading ? <img src={imageUrl ?? ""} alt="" /> : <Loader />}
      <div className="preview-block--info">
        <h4>{title}</h4>
        <CreatorSpan creator={creator} date={createdAt} />
        {/* 
          there should be better way to render short part of the article, 
          the markdown component isn't the best choice for UI
        */}
        <p>{stringCut(description, 100)}</p>
        <div>
          <Link to={`/article/${articleId}`}>Read whole article</Link>
          <span>{numOfComs} comments</span>
        </div>
      </div>
    </article>
  );
};

export default PreviewBlock;
