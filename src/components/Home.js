import React from "react";
import "../index.css";
const Home = () => (
  <div className="p-4 md:p-8 max-w-4xl mx-auto text-center" id="Home">
    <img
      src={`${process.env.PUBLIC_URL}/DyllanWed.jpg`}
      alt="Profile"
      className="profile-picture"
    />
    <p className="text-base md:text-lg mt-4 leading-relaxed">
      <h2 className="home">Welcome to My Portfolio</h2>I am a results-driven
      Software Consultant with extensive experience working with leading
      companies such as BT, contributing to greenfield projects within the NHS,
      and currently collaborating with Sky in an Agile environment. Explore my
      projects and skills to learn more about my work.
    </p>
  </div>
);

export default Home;
