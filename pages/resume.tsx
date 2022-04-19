import React from "react";
import { languages, tools } from "../data";
import Bar from "../components/Bar";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education and experience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold">UO People</p>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem neque odio voluptates. Officiis perspiciatis
              eveniet unde sint eaque vero repellendus cumque minus voluptas
              corporis laboriosam rem odit ad esse alias tempora neque nostrum
              fugit et iusto autem earum, ea soluta facere! Excepturi dolor
              quia, perspiciatis repellat commodi at quod magni.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Front End developer</h5>
            <p className="font-semibold">Freelance</p>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem neque odio voluptates. Officiis perspiciatis
              eveniet unde sint eaque vero repellendus cumque minus voluptas
              corporis laboriosam rem odit ad esse alias tempora neque nostrum
              fugit et iusto autem earum, ea soluta facere! Excepturi dolor
              quia, perspiciatis repellat commodi at quod magni.
            </p>
          </div>
        </div>
      </div>
      {/* languages & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">languages & frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
