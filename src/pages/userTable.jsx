// import { useDispatch, useSelector } from "react-redux"; // Extract the data from store in userData

// import { DeleteUser, fetchUsers } from "../features/userSlice";
// import { useEffect } from "react";

// function UserTable() {
//   const users = useSelector((state) => state.user.users || []);
//   console.log(users);
//   const dispatch = useDispatch();
//   const handleDelete = (email) => {
//     dispatch(DeleteUser(email)); // Dispatch delete action with the user's email
//   };

//   useEffect(() => {
//     dispatch(fetchUsers()); // Dispatch the fetchUsers action on component mount
//   }, [dispatch]);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user.email}>
//                 <td>{user.name}</td>
//                 <td>{user.city}</td>
//                 <td>{user.state}</td>
//                 <td>{user.email}</td>
//                 <button onClick={() => handleDelete(user.email)}>Delete</button>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No users found</td>{" "}
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserTable;
