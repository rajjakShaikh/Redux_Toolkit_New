// // src/components/UserForm.js
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../features/userSlice";

// const UserForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     city: "",
//     state: "",
//     email: "",
//   });

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, city, state, email } = formData;

//     if (name && city && state && email) {
//       dispatch(addUser(formData));
//       console.log("formdata:", addUser(formData));
//       setFormData({
//         name: "",
//         city: "",
//         state: "",
//         email: "",
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       <input
//         type="text"
//         name="city"
//         value={formData.city}
//         onChange={handleChange}
//         placeholder="City"
//       />
//       <input
//         type="text"
//         name="state"
//         value={formData.state}
//         onChange={handleChange}
//         placeholder="State"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UserForm;
