import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    gender: "",
    language: "",
    text: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
      alert(`Registeration Successfull!!  You Are Welcome To GlassPlus`);
      navigate("/");
    }
  }, [formErrors]);

  const validate = (value) => {
    const errors = {};
    const reget = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.fullname) {
      errors.fullname = "Full Name Is Required";
    }
    if (!value.email) {
      errors.email = "Email Is Required";
    } else if (!reget.test(value.email)) {
      errors.email = "Input Valid Email";
    }
    if (!value.text) {
      errors.text = "Name Your Skill";
    }
    if (!value.phone) {
      errors.phone = "Phone Number Is Required";
    }
    if (!value.gender) {
      errors.gender = "Choose Your Gender";
    }
    if (!value.language) {
      errors.language = "Choose your Lang.";
    }
    return errors;
  };

  return (
    <>
      {/* <div>   {Object.keys(formErrors).length === 0 && isSubmit
            ?< div className="">Registration Succeefull You are welcome to GlassPlus </div>
            : ' Please re-enter your registration'}
                  </div>

            */}
      <form
        action=""
        className="absolute top-20 flex flex-col justify-center items-center w-full italic gap-6 text-blue-900"
        onSubmit={handleSumbit}
      >
        <div className=" bg-gray-100 px-4 flex flex-col w-[31%]  md:w-[30%] sm:w-[60%] xs:w-[90%]">
          <h1 className="text-2xl font-semibold py-6 flex justify-center items-center uppercase">
            Register
          </h1>
          <div className="flex flex-col my-2">
            <label htmlFor="">Full Name:</label>
            <input
              type="text"
              onChange={handleForm}
              value={formData.fullname}
              name="fullname"
              placeholder="Buzo"
              className="py-1 px-2 w-full focus:outline-none focus:bg-slate-200  rounded-sm"
            />
            <p className="text-red-500 text-[10px]">{formErrors.fullname}</p>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleForm}
              value={formData.email}
              placeholder="buzo@mail.com"
              className="py-1 px-2 w-full focus:outline-none focus:bg-slate-200  rounded-sm"
            />
            <p className="text-red-500 text-[10px]">{formErrors.email}</p>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Phone Number:</label>
            <input
              type="number"
              name="phone"
              onChange={handleForm}
              value={formData.phone}
              placeholder="+234"
              className="py-1 px-2 w-full focus:outline-none focus:bg-slate-200  rounded-sm"
            />
            <p className="text-red-500 text-[10px]">{formErrors.phone}</p>
          </div>
          <div className=" my-2">
            <label htmlFor="" className="">
              Gender:
            </label>
            <div className="flex flex-row -mb-[1px] my-2">
              <div className="ml-3">
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  onChange={handleForm}
                />
                <label htmlFor="" className="pl-1">
                  Male
                </label>
              </div>
              <div className="ml-3">
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  onChange={handleForm}
                />
                <label htmlFor="" className="pl-1">
                  Female
                </label>
              </div>
              <div className="ml-3">
                <input
                  type="radio"
                  name="gender"
                  value={"confuse"}
                  onChange={handleForm}
                />
                <label htmlFor="" className="pl-1">
                  Confuse
                </label>
              </div>
            </div>
            <p className="text-red-500 text-[10px]">{formErrors.gender}</p>
          </div>
          <div className="flex flex-col my-3">
            <fieldset>
              <legend className="py-1">Choose Your Language</legend>
              <select
                name="language"
                id=""
                className="py-1 rounded-sm"
                onChange={handleForm}
                value={formData.language}
              >
                <optgroup label="Front-End">
                  <option value="">select</option>
                  <option value="html&css">HTML & CSS</option>
                  <option value="js">JavaScript</option>
                  <option value="vue">Vue</option>
                  <option value="react">React</option>
                </optgroup>
                <optgroup label="Baack-End">
                  <option value="python">Python</option>
                  <option value="rust">Rust</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                </optgroup>
              </select>
              <p className="text-red-500 text-[10px]">{formErrors.language}</p>
            </fieldset>
          </div>
          <div className="my-3">
            <textarea
              name="text"
              onChange={handleForm}
              value={formData.text}
              className="resize-none p-2 -mb-2 overflow-hidden text-black"
              placeholder="Your choice skill"
            />
            <p className="text-red-500 text-[10px]">{formErrors.text}</p>
          </div>
          <button
            type="submit"
            className="my-6 border py-[7px] rounded-md bg-blue-800 text-white uppercase hover:bg-transparent hover:text-black"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
