import { useCallback, useEffect, useState } from "react";
import { getImage } from "../utils/api/getImage";
import { postImage } from "../features/createArticle/utils/api/postImage";

const usePostImage = (file: File | null) => {
  const [imageId, setImageId] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>("");

  const postImageHandle = useCallback(async () => {
    if (!file) {
      return setImageId("");
    }
    const id = await postImage(file);
    setImageId(id);
  }, [file]);

  useEffect(() => {
    postImageHandle();
  }, [postImageHandle]);

  //I believe that it is possible to avoid this by using existing hook
  //useGetImage.ts
  useEffect(() => {
    const getImageHandler = async () => {
      if (!imageId) {
        setImageUrl(null);
      } else {
        const url = await getImage(imageId);
        setImageUrl(url);
      }
    };

    getImageHandler();
  }, [imageId]);

  return { imageId, imageUrl };
};

export default usePostImage;
