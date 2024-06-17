import React from "react";
import "../index.css";
const Home = () => (
  <div className="p-4 md:p-8 max-w-4xl mx-auto text-center" id="Home">
    <img
      src={`${process.env.PUBLIC_URL}/DyllanWed.png`}
      alt="Profile"
      className="profile-picture"
    />
    <p className="text-base md:text-lg mt-4 leading-relaxed">
      <h2 className="home">Welcome To My Portfolio</h2>
      My name is Dyllan Marais, I am a results-driven Software Consultant with
      extensive experience. Working alongside leading companies such as BT,
      contributing to greenfield projects within the NHS and collaborated with a
      cross functional team within Sky. Explore my projects and skills to learn
      more about my work.
    </p>
  </div>
);

export default Home;
