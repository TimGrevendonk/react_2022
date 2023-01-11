import { atom } from "recoil";

export const recoilCategoryState = atom({
  key: "recoilCategoryState",
  default: { id: 1, name: "soft drinks" },
});

export const recoilOrderlistState = atom({
  key: "recoilOrderlistState",
  default: [],
});
