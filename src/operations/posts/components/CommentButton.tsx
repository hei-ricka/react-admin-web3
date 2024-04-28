import { Button, useRecordContext, useRedirect } from "react-admin";
import { Comment } from "@mui/icons-material";

export function CommentButton() {
  const { id: postId } = useRecordContext();
  const redirect = useRedirect();

  return (
    <Button
      label="Comments"
      startIcon={<Comment />}
      onClick={() => redirect(`/posts/${postId}/comments`)}
    />
  );
}
