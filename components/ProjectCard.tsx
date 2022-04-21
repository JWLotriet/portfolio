import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">name</p>

      {showDetail && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100">
          <div>
            <img src={image_path} alt={name} />
            <div className=" space-x-3flex justify-center my-4">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
