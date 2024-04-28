import { Datagrid, List, TextField, useRedirect } from "react-admin";
import { useParams } from "react-router-dom";

export function CommentList() {
  const redirect = useRedirect();
  const { postId } = useParams();

  return (
    <List resource="comments">
      <Datagrid
        rowClick={(id) => {
          redirect(`/posts/${id}/comments/${id}`);
          return false;
        }}
      >
        <TextField source="id" label="ID" />
        <TextField source="name" label="name" />
        <TextField source="email" label="email" />
      </Datagrid>
    </List>
  );
}
