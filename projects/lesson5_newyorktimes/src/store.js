import { atom, selector } from "recoil";
import NytApi from "./apis/nyt_api";

export const recoilNewsItemType = atom({
  key: "recoilNewsItemType",
  default: "politics",
});

export const recoilNewsItems = selector({
  key: "recoilNewsItems",
  get: async ({ get }) => {
    const result = await NytApi.getPosts(get(recoilNewsItemType));
    console.log("[store debug]", result);
    result.data.results.forEach((post) => {
      if (post.multimedia) {
        let imgObj = post.multimedia.find(
          (media) => media.format === "Super Jumbo"
        );
        post.image_url = imgObj ? imgObj.url : "no-image.jpg";
      } else {
        post.image_url = "no-image.jpg";
      }
    });
    return result.data.results;
  },
});
