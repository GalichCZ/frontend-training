const axios = require("axios");
import { getImage } from "../api/getImage"; // Replace with the correct path to your module
import MockAdapter from "axios-mock-adapter";

describe("getImage", () => {
  it("should return the image URL for valid imageId", async () => {
    const mockImageId = "example-image-id";
    const mockImageUrl = "http://example.com/example-image.jpg";
    const mockApiResponse = {
      data: "mock-image-binary-data",
      headers: { "content-type": "image/jpeg" },
    };
    const mockAxios = new MockAdapter(axios);

    mockAxios.onGet(`/images/${mockImageId}`).reply(200, mockApiResponse);

    const imageUrl = await getImage(mockImageId);
    expect(imageUrl).toBe(mockImageUrl);
  });

  it("should return an empty string for invalid imageId", async () => {
    const invalidImageId = "invalid-image-id";
    const mockAxios = new MockAdapter(axios);

    mockAxios.onGet(`/images/${invalidImageId}`).reply(404);

    const imageUrl = await getImage(invalidImageId);
    expect(imageUrl).toBe("");
  });
});
