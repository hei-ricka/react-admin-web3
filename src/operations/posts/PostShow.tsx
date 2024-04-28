import {
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from "react-admin";
import { CommentButton } from "./components";
import { UserField } from "../common/components";

export function PostShow() {
  return (
    <Show
      actions={
        <TopToolbar>
          <CommentButton />
        </TopToolbar>
      }
    >
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="title" label="Title" />
        <FunctionField label="User" render={() => <UserField />} />
      </SimpleShowLayout>
    </Show>
  );
}
