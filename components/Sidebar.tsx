import React from "react";
import profilePic from "../public/profile-pic.jpg";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillGitlab } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        layout="responsive"
        className="w-32 h-32  rounded-full mx-auto"
        src={profilePic}
        alt="profile pic"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-roboto">
        <span className="text-green">John-William</span> Lotriet
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark">
        Web Developer
      </p>
      <a
        className=" dark:bg-dark-200 px-2 py-1 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social icons */}
      <div className="flex justify-around my-5 text-green w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer " />
        </a>
        <a href="">
          <AiFillGitlab className="w-8 h-8 cursor-pointer " />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer " />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Stellenbosch South Africa</span>
        </div>
        <p className="my-2">johnwilliamlotriet@gmail.com</p>
      </div>
      {/* email button */}
      <button
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
        onClick={() => window.open("mailto:johnwilliamlotriet@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
