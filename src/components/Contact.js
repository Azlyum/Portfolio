import React from "react";

const Contact = () => (
  <div className="p-4 md:p-8 max-w-4xl mx-auto text-center" id="Contact">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
    <p className="text-base md:text-lg mt-4">
      Email:{" "}
      <a href="mailto:Dyllancmarais@gmail.com" className="text-current">
        Dyllancmarais@gmail.com
      </a>
    </p>
    <p className="text-base md:text-lg mt-4">
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/dyllan-marais-4b9aa6213/"
        className="text-current"
      >
        Dyllan Marais
      </a>
    </p>
    <p className="text-base md:text-lg mt-4">
      GitHub:{" "}
      <a href="https://github.com/Azlyum" className="text-current">
        Azlyum
      </a>
    </p>
  </div>
);

export default Contact;
