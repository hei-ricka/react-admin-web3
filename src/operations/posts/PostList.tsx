import { Datagrid, FunctionField, List, TextField } from "react-admin";
import { CommentButton } from "./components";
import { UserField } from "../common/components";

export function PostList() {
  return (
    <List title="Post list">
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <FunctionField label="User" render={() => <UserField />} />
        <CommentButton />
      </Datagrid>
    </List>
  );
}
