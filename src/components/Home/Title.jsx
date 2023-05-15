import React from "react";
import Typewriter from "typewriter-effect";

function Title() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Software Engineer",
          "A Full Stack Developer",
          "A Scrum Master",
          "An Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Title;
