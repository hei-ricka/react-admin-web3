import { ResourceProps } from "react-admin";
import { PostList } from "./PostList";
import { PostShow } from "./PostShow";

export const postUI: Partial<ResourceProps> = {
  list: PostList,
  show: PostShow,
};
