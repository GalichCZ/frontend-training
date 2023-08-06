import { Button } from "@mui/material";
import { ChangeEvent, FC, useRef } from "react";

interface Props {
  variant: "text" | "contained";
  content: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UploadButton: FC<Props> = ({ handleFileChange, variant, content }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <input
        className="article-form--file-input"
        type="file"
        id="image-input"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Button onClick={handleUploadButtonClick} size="small" variant={variant}>
        {content}
      </Button>
    </>
  );
};

export default UploadButton;
