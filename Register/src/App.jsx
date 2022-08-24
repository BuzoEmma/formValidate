import React from "react";
import { useState, useEffect } from "react";
import { BsEmojiAngry } from "react-icons/bs";

const App = () => {
   const  initailvalue = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formValue, setFormValue] = useState(initailvalue);
  const [formErrors, setFormErrors] = useState({});
  const [issubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  console.log(formValue);
  const { username, email, password, password2 } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValue));
    setIsSubmit(true);
  };

  const validateForm = (value) => {
    const errors = {};
    const reget = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!value.username) {
      errors.username = "Username is required";
    }
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!reget.test(value.email)) {
      errors.email = "Input Valid Email";
    }
    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password.length < 5) {
      errors.password = "Password should be more than 5 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    }
    if (!value.password2) {
      errors.password2 = "Confirm your password";
    } else if (value.password2 !== value.password) {
      errors.password2 = `Password did't match `;
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && issubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  return (
    <>
      <div className=" w-full h-screen flex flex-col justify-center items-center bg-slate-200 italic">
        {Object.keys(formErrors).length === 0 && issubmit ? (
          <p className="p-6 flex flex-row">Sign In Successfully</p>
        ) : (
          !issubmit? '' : <BsEmojiAngry className="text-2xl bg-red-500 rounded-full m-2"  />
        )}

        {/* <p className="p-6 flex flex-row">Sign In Successfully</p> */}
        <form
          action="register"
          onSubmit={handleSubmit}
          className=" form flex flex-col justify-center items-center  p-2 bg-white gap-3 rounded-md"
        >
          <h1 className="pb-10 pt-4 text-4xl">Sign In</h1>
          <div className=" flex flex-col w-full ">
            <label htmlFor="username" className="text-xl p-1">
              Username:
            </label>
            <input
              value={username}
              name={"username"}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              className="border p-2 outline-none rounded-md"
            />
            <p className="text-sm text-red-400">{formErrors.username}</p>
          </div>
          <div className=" flex flex-col w-full ">
            <label htmlFor="email" className="text-xl p-1">
              Email:
            </label>
            <input
              value={email}
              name={"email"}
              onChange={handleChange}
              type="text"
              placeholder="Email"
              className="border p-2 outline-none rounded-md"
            />
            <p className="text-sm text-red-400">{formErrors.email}</p>
          </div>
          <div className=" flex flex-col w-full ">
            <label htmlFor="password" className="text-xl p-1">
              Password:
            </label>
            <input
              value={password}
              name={"password"}
              autoComplete={"on"}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="border p-2 outline-none rounded-md"
            />
            <p className="text-sm text-red-400">{formErrors.password}</p>
          </div>{" "}
          <div className=" flex flex-col w-full ">
            <label htmlFor="password" className="text-xl p-1">
              Password:
            </label>
            <input
              value={password2}
              name={"password2"}
              autoComplete={"on"}
              onChange={handleChange}
              type="password"
              placeholder="Confirm your password"
              className="border p-2 outline-none rounded-md"
            />
            <p className="text-sm text-red-400">{formErrors.password2}</p>
          </div>
          <button className="font-bold border my-4 py-2 px-6 rounded-md hover:bg-slate-200 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;

// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
