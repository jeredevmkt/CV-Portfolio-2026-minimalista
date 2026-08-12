import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Freelancer",
          "Social Media Marketing Ads Management",
          "Wordpress, GHL, eCommerce, AI Specialist",
          "MERN & Python Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
