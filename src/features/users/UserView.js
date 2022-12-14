import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UsersView = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.user.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="outer">
      <h1>Users List</h1>
      {users.map((user) => (
        <h1>{user}</h1>
      ))}
    </div>
  );
};

export default UsersView;
