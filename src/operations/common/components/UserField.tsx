import { TextField, useGetOne, useRecordContext } from "react-admin";

export function UserField() {
  const { id: postId } = useRecordContext();
  const { data: user } = useGetOne("users", { id: postId });
  return <TextField record={user} source="name" label="test" />;
}
