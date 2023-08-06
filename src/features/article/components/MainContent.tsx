import { FC } from "react";
import useGetImage from "../../../hooks/useGetImage";
import CreatorSpan from "../../../UI/CreatorSpan";
import Loader from "../../../UI/Loader";
import ReactMarkdown from "react-markdown";

interface Props {
  title: string;
  perex: string;
  imgId: string;
  createdAt: Date;
}

const MainContent: FC<Props> = ({ title, perex, imgId, createdAt }) => {
  const { imageUrl, loading } = useGetImage(imgId);

  return (
    <div className="article-content--main">
      <h1>{title}</h1>
      <CreatorSpan creator="John Reed" date={createdAt} />
      {!loading ? <img src={imageUrl ?? ""} alt="" /> : <Loader />}
      <ReactMarkdown>{perex}</ReactMarkdown>
    </div>
  );
};

export default MainContent;
