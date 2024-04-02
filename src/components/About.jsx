import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Shruti Shukla, Please take a
                look this.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am 2nd year student of B.Tech at Avantika University. I am learning Full Stack Development, Basic Python. I am passionate about technology and his interest in programming has led him to pursue a career in the field. I enjoys learning new technologies and is eager to apply them in creative projects.I has a strong desire to make a difference in the world and strives to use his skills to do so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;