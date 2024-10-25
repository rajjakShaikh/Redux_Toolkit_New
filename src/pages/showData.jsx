import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userSlice";

function ShowData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users, loading, error } = useSelector((state) => state.user);
  console.log("users", users);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>
        {users
          ? users.map((userData) => (
              <div key={userData.id}>
                <p>name: {userData.name}</p>
              </div>
            ))
          : "no users found"}
      </div>
    </>
  );
}

export default ShowData;
