import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import front from "../assets/frontend.png";
import back from "../assets/backs.webp";
import programming from "../assets/programming.webp";
import basic from "../assets/basic.jpg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Nav />
      <div className="relative top-20 px-4 m-auto">
        <p className="text-blue-900 w-full px-4 rounded-lg py-4 text-justify tracking-wide italic ">
          We are in supply and Maintenance of IT Equipment At GLASPLUS, we work
          with a passion and believe in delivering the very best. We believe
          that the trust is an indicator of product quality and services. So
          creating and maintaining a lasting relationship with our
          customers/student is our concern. We supply quality IT products,
          train, empower, service and add value to their safety. We have
          embraced the most contemporary information technologies enabling us to
          offer world-class technological solutions in the world of Multimedia.
        </p>
        <p className="flex place-content-center my-4 px-5 text-blue-900 font-semibold text-xl">
          Our Services
        </p>
        <div className="p-4  w-full  grid grid-cols-4 xs:grid-cols-1 md:grid-cols-2 xm:grid-cols-1 bg-slate-100 gap-4">
          <div className=" flex flex-col items-center  shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
            <img src={front} alt="image" className=" w-[13rem]" />
            <p className="text-blue-900    py-6  ">
              <strong className="text-xl capitalize"> FrontEnd Development </strong>
              <br />
              <strong className="text-sm capitalize"> You will be able to learn</strong>
              <br />
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-4xl pr-2 text-amber-700" />
                <h1> Have a degree in Computer Science or similar field</h1>
              </p>
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-5xl pr-2 text-amber-700" />
                <h1>
                  Be proficient in coding languages such as HTML, CSS,
                  JavaScript, and jQuery
                </h1>
              </p>
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1>Understand server-side CSS.</h1>
              </p>
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-5xl pr-2 text-amber-700" />
                <h1>
                  Be experienced with graphic design applications (e.g., Adobe
                  Illustrator)
                </h1>
              </p>
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> Understand the principles of SEO</h1>
              </p>
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> Have excellent skills in problem-solving</h1>
              </p>
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-5xl pr-2 text-amber-700" />
                <h1>
                  Be proficient in communicating with team members, bosses, and
                  clients
                </h1>
              </p>
              <p className="flex text-sm py-3 ">
                <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> Have good interpersonal skills</h1>{" "}
              </p>
            </p>
            <button className=" mt-[4.5rem] py-2 px-6 border rounded bg-blue-900 text-white hover:bg-transparent hover:text-black ">
              <Link to={"/form"}>Register</Link>
            </button>
          </div>
          <div className="flex flex-col items-center w-dull shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
            <img src={back} alt="image" className=" w-[13rem]" />
            <p className="text-blue-900 w-full px-4 rounded-lg py-4  ">
              <strong className="text-lg capitalize"> BackEnd Development</strong><br />
              <strong className="text-sm capitalize"> You will be able to learn</strong>
              <br />
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-[2.7rem] pr-2 text-amber-700" />
                <h1>Full knowledge in Python, Ruby, Java, PHP and NodeJs</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1>Knowledge of Popular Frameworks</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-[1.7rem] pr-2 text-amber-700" />
                <h1> Data Structures and Algorithms</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-[1.8rem] pr-2 text-amber-700" />
                <h1>Databases and Cache</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-[2.7rem] pr-2 text-amber-700" />
                <h1> FrontEnd Knowledge like HTML, CSS, and JavaScript</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-[1.9rem] pr-2 text-amber-700" />
                <h1> Familiarity with Servers</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> Knowledge of APIs</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-4xl pr-2 text-amber-700" />
                <h1> Version Control and Version Control Systems</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> Problem-solving</h1>
              </p>
            </p>
            <button className=" mt-[2rem] py-2 px-6 border rounded bg-blue-900 text-white hover:bg-transparent hover:text-black ">
              <Link to={"/form"}>Register</Link>
            </button>
          </div>
          <div className="flex flex-col items-center w-dull shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
            <img src={basic} alt="" className=" w-[11rem]" />
            <p className="text-blue-900 w-full px-4 rounded-lg py-4  ">
              <strong className="text-lg">Basic Training</strong>
              <br />
              <strong className="text-sm capitalize"> You will be able to learn</strong>

              <br />
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-5xl pr-2 text-amber-700" />
                <h1>
                  Use of Ms Offices like, msWord, MsExcell, MsPowerPoint and
                  etc
                </h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-6xl pr-2 text-amber-700" />
                <h1>
                  Basics of Electronics - Fundamentals like Voltage, Current,
                  Power, Frequency
                </h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-5xl pr-2 text-amber-700" />
                <h1>Learn how to Operate and Discover New Operating Systems</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1>Protect Your Data</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> Electronic Circuit Analysis & Design </h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1>Use the Keyboard and More</h1>
              </p>

              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> Problem-solving</h1>
              </p>
            </p>
            <button className=" mt-[1.6rem] py-2 px-6 border rounded bg-blue-900 text-white hover:bg-transparent hover:text-black ">
              <Link to={"/form"}>Register</Link>
            </button>
          </div>
          <div className="flex flex-col items-center w-dull  shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
            <img src={programming} alt="" className=" w-[13rem]" />
            <p className="text-blue-900 w-full px-4 rounded-lg py-4  ">
              <strong className="text-lg capitalize"> Other packages we offer under wealth </strong>
              <br />
              <strong className="text-sm capitalize"> You will be able to learn</strong>

              <br />
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-3xl pr-2 text-amber-700" />
                <h1> e-Entrepreneurship knowledge and Skills.</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-5xl pr-2 text-amber-700" />
                <h1>
                  Become Computer and Internet Literate within two weeks
                  Guaranteed!
                </h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-[2.3rem] pr-2 text-amber-700" />
                <h1> Improve your skills and specialist knowledge.</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-5xl pr-2 text-amber-700" />
                <h1>Keep your skills up-to-date Gain a better job or promotion Earn
                More.</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-7xl pr-2 text-amber-700" />
                <h1>Be better prepared for job interviews and
                Creating awareness on Cashless economy & associated benefits.</h1>
              </p>
              <p className="flex text-sm py-3 ">
              <FiArrowRight className="text-[1.5rem] pr-2 text-amber-700" />
                <h1>Problem-solving</h1>
              </p>
            </p>
            <button className=" mt-[6rem] py-2 px-6 border rounded bg-blue-900 text-white hover:bg-transparent hover:text-black ">
              <Link to={"/form"}>Register</Link>
            </button>
          </div>
        </div>
        <div className="mt-10">
        <h1
        h1 className="text-blue-900 w-full px-4 rounded-lg py-4 text-justify tracking-wide italic ">
             CONCLUDING.....</h1>
          <p className="text-blue-900 w-full px-4 rounded-lg py-4 text-justify tracking-wide italic ">
            Our professional experience has stood us in good stead over the
            years and our past and present clients/student can testify to our
            uncompromising position in the pursuit of excellence. We are
            therefore completely focused on rendering professional services, in
            keeping with the highest ethics in the world of information
            technology and valuation profession. Our clients are always pleased
            to find that our company's approach to business is in the finest
            traditions.
          </p>
        </div>
      </div>

      <div className="relative bottom-0 mt-[15rem] w-full  ">
        <Footer />
      </div>
    </>
  );
};

export default Services;
