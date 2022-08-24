import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import img from "../assets/bg.jpg";
import comp from "../assets/comp.jpg";
import train from "../assets/train.jpg";
import build from "../assets/build.jpg";
import benefit from "../assets/benefit.jpeg";
import Nav from "./Nav";

const Home = () => {
  const [text, setText] = useState(false);

  return (
    <>
      <Nav />

      <div className="grid grid-cols-2 xs:grid-cols-1 pt-[5rem] pb-6 px-2  justify-between border-b border-b-amber-700 ">
        <img src={img} alt="" className="w-[85%]" />
        <div className=" xs:pt-6 mt-[2rem] xs:px-2 ">
          <p className="py-[1rem] text-3xl  font-bold tracking-wide ">
            <span className="">Glass</span>
            <span className=" text-amber-700 ">Plus</span>
          </p>
          <p className=" italic text-gray-600">
            Get trained in modern innovation process as part of its prosperity
            and existence. Specialized in latest/ newest innovation of Software
            and Hardware Tech.
          </p>
          <button className=" my-5 py-2 px-6 border rounded bg-blue-900 text-white hover:bg-transparent hover:text-black ">
            <Link to={"/form"}>Register</Link>
          </button>
        </div>
      </div>

      <div className=" p-8 w-full  bg-white italic flex flex-col  place-items-center ">
        <div className="border rounded px-5  py-3 shadow flex flex-col xm:w-[95%] w-[70%] md:w-[60%] xs:w-[90%]  justify-center items-center  ">
          <h1 className="uppercase  text-blue-900 text-lg">our goal</h1>
          <p className="tracking-wider text-sm text-blue-900 py-1 ">
            To be among the leading IT companies in local and global markets. To
            work with an understanding that leads us to a quality management
            system To increase our market Share with high quality products and
            service To add value to human Safety through training, empowerment
            and Service secure.
          </p>
        </div>
      </div>

      <div className="p-4 w-full  grid grid-cols-4 xs:grid-cols-1 md:grid-cols-2 xm:grid-cols-1 bg-slate-100 gap-4">
        <div className=" flex flex-col items-center  shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
          <img
            src={comp}
            alt="image"
            className="w-[17rem] h-[8rem] rounded-md "
          />
          <p className="text-blue-900 w-full px-4 rounded-lg py-4 text-justify ">
            <strong> Computer Programming</strong>
            <br />
            Seasoned developers, software and hardware experts with sound
            knowledge and technical know-how groomed in Nigeria and
            International Countries with enriching years of experience in the
            industry both FronEnd and BackEnd development.
          </p>
        </div>
        <div className="flex flex-col items-center w-dull shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
          <img
            src={build}
            alt="image"
            className="w-[17rem] h-[8rem] rounded-md "
          />
          <p className="text-blue-900 w-full px-4 rounded-lg py-4  ">
            <strong> Empowerment And Capacity Building</strong>
            <br />
            Empowerment programs for the youths in all Profession, as our
            contribution to the grassroots in capacity building and those
            Academicians seeking new career/job opportunities or businesses on
            the web.
          </p>
        </div>
        <div className="flex flex-col items-center w-dull shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
          <img
            src={train}
            alt="image"
            className="w-[17rem] h-[8rem] rounded-md "
          />
          <p className="text-blue-900 w-full px-4 rounded-lg py-4  ">
            <strong> Training</strong>
            <br />
            We can organise training both locally and internationally in a
            prestigious training centres with the help of our international
            partners in the UK, South Africa, USA, and Nigeria.
          </p>
        </div>
        <div className="flex flex-col items-center w-dull  shadow-xl p-4 bg-white hover:bg-blue-100 duration-500 rounded-md">
          <img
            src={benefit}
            alt="image"
            className="w-[17rem] h-[8rem] rounded-md "
          />
          <p className="text-blue-900 w-full px-4 rounded-lg py-4  ">
            <strong> The Benefits </strong>
            <br />
            You will be prepared and made ready to take on the international
            stage with confidence and be able to promote your business, products
            and profession, locally, nationally and globally.
          </p>
        </div>
      </div>
      <div className=" p-8 w-full  bg-white italic flex flex-col  place-items-center ">
        <div className="border rounded px-5  py-3 shadow flex flex-col xm:w-[95%] w-[70%] md:w-[60%] xs:w-[90%]   justify-center items-center  ">
          <h1 className="uppercase  text-blue-900 text-lg">
            quality management
          </h1>
          <p className="tracking-wider text-sm text-blue-900 py-1 ">
            To attach utmost importance to human factor and thus combining this
            understanding with high quality products/services, paving the way
            for customer satisfaction. To be a reliable source of quality IT
            products by continuously introducing the latest IT products/services
            in the world of technology, thus presenting our customers with the
            best options. To always try our best to improve the training and
            quality level of our staff, thus incessantly continue to seek the
            best alternatives to offer our customers.
          </p>
        </div>
      </div>
      <div className="my-6">
        <div className="text-blue-900 w-full px-6  rounded-lg py-4  text-justify tracking-tight italic ">
          List below are all suite currently available within CMS and respective
          modules within them. (such as Accounting management suite, Course
          Administration, Infrastructure, Personnel, Productivity, Sales and
          Marketing, Student, Admin Controls suite and other Additional CMS
          Tools which include office Notes, Instant Chat Console, Letter
          Templates, Weblearn and Widgets
          <div className="bg-gray-200 shadow-lg flex xs:flex-col gap-10 xs:gap-0 tracking-tight mt-6 p-6 text-gray-900 rounded-lg">
            <span className="flex flex-col text-start">
              * Complete E-Security Solution Provider. <br />
              * Online Marketing/Promotion. <br />
              * Executive dynamic website development/application. <br />
              * Database integration, flash and multimedia development. <br />
              * SMS solutions and e-consulting. <br />
              * Electronics and Media printing/publishing. <br />
              * Alternative Energy. <br />
            </span>

            <span className="flex flex-col text-start">
              * IT Management: day-to-day management of technology resources.{" "}
              <br />
              * Financial Accounting & Human Resources Management Software
              Solution. <br />
              * IT Certification Training. (Computer $ internet literate within
              2 weeks guaranteed) <br />
              * Introducing The Latest Innovation IT Products/Security Devices
              of all kinds. <br />
              * Empowerment And Capacity Building. <br />
              * Mobile Communication Network. <br />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
