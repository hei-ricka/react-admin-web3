import { Show, SimpleShowLayout, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export function CommentShow() {
  const { commentId } = useParams();
  return (
    <Show resource="comments" id={commentId}>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="name" label="name" />
        <TextField source="email" label="email" />
      </SimpleShowLayout>
    </Show>
  );
}
