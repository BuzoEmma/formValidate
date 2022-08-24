import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="relative top-20 px-4 py-2 m-auto">
      <button className=" mb-8 py-2 px-6 border rounded bg-blue-900 text-white hover:bg-transparent hover:text-black ">
              <Link to={"/form"}>Register</Link>
            </button>
        <div className="grid grid-cols-3 xs:grid-cols-2 gap-6 italic">
          <div className="shadow border p-4 flex flex-col place-items-center ">
            <p> NIGERIA</p>
            <p className="py-4">
              27, Osolo Way, Ajao Estate, Off Muritala Muhammad Airport Road,
              Lagos State.
            </p>
            <p>
              Tel:
              <a href="tel:123-456-7890" className="pr-3">
                08023514063
              </a>
              <a href="tel:123-456-7890"> 07030722280</a>
            </p>
          </div>
          <div className="shadow border p-4 flex flex-col place-items-center ">
            <p>U.K</p>
            <p className="py-4">
              9 Elizabethan Way, OUR LOCATION Stanwell Staines, Middlesex TW19
              7QJ United Kingdom
            </p>
            <p>
              Tel:
              <a href="tel:123-456-7890" className="pr-3">
                +447 4040 27936
              </a>
              <a href="tel:123-456-7890">+447 438836,964</a>
            </p>
          </div>

          <div className="shadow border p-4 flex flex-col place-items-center ">
            <p>DUBLIN</p>
            <p className="py-4">
              345, South Circular Road Dublin 8, Co Dubin, Rep Of Ireland.
            </p>
            <p>
              Tel:
              <a href="tel:123-456-7890" className="pr-3">
                {" "}
                +353 8779 47228
              </a>
              <a href="tel:123-456-7890">+101 578 0563</a>
            </p>
          </div>

          <div className="shadow border p-4 flex flex-col place-items-center ">
            <p>U.S.A</p>
            <p className="py-4">
              190, Sunset Blvd Apt, 1194541 Hayward, Ca USA.
            </p>

            <p>
              Tel:
              <a href="tel:123-456-7890" className="pr-3">
                {" "}
                +510 866 3988
              </a>
              <a href="tel:123-456-7890">+510 47207 61</a>
            </p>
          </div>
        </div>
        <p className="flex items-center justify-center my-12 italic">
          TRAINING EMPOWERMENT SERVICE SECURE
        </p>
      </div>
      <div className="relative bottom-0 mt-[15rem] w-full  ">
        <Footer />
      </div>
    </>
  );
};

export default Contact;

{
  /* <div className="flex flex-col gap-3 ">
<p className="flex gap-4 ">
  <MdLocalPhone />
  <a href="tel:123-456-7890">123-456-7890</a>
</p>
<p className="flex gap-4">
  <AiOutlineMail />
  <a href="mailto:buzoemma6@mail.com">Jon Doe</a>
</p>
<button className=" my-5 py-2 px-6 border rounded bg-amber-900 text-white hover:bg-transparent hover:text-black ">
  <Link to={"/form"}>Register</Link>
</button>
</div> */
}
