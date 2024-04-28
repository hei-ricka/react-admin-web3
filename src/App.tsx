import { Admin, Resource } from "react-admin";
import { Route } from "react-router-dom";

import { CommentList, CommentShow } from "./operations/comments";
import { postUI } from "./operations/posts";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" />
    <Resource name="comments" />
    <Resource name="posts" {...postUI}>
      <Route path=":postId/comments" element={<CommentList />} />
      <Route path=":postId/comments/:commentId" element={<CommentShow />} />
    </Resource>
  </Admin>
);
