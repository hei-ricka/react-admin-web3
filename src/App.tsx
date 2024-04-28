import { Admin, Resource } from "react-admin";
import { postUI } from "./operations/posts";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" />
    <Resource name="posts" {...postUI} />
  </Admin>
);
