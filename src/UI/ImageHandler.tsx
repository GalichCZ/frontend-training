import { ChangeEvent, FC } from "react";
import UploadButton from "./UploadButton";

interface Props {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageUrl: string;
}

const ImageHandler: FC<Props> = ({ handleFileChange, imageUrl }) => {
  return (
    <div className="image-handler">
      <img src={imageUrl} alt="article" />
      <div className="image-handler">
        <UploadButton
          variant="text"
          content="Upload new"
          handleFileChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImageHandler;
