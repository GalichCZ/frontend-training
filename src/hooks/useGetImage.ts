import { useCallback, useEffect, useState } from "react";
import { getImage } from "../utils/api/getImage";

const useGetImage = (imageId: string) => {
  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  const getImageHandler = useCallback(async () => {
    setLoading(true);
    if (!imageId) {
      setImageUrl(null);
    } else {
      const url = await getImage(imageId);
      setImageUrl(url);
    }
    setLoading(false);
  }, [imageId]);

  useEffect(() => {
    getImageHandler();
  }, [getImageHandler]);

  return { loading, imageUrl };
};

export default useGetImage;
