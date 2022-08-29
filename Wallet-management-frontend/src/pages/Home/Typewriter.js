import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
const Typewriter = () => {
  return (
    <div>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "white",
          fontWeight: "100",
          fontSize: "1.0em",
          marginTop: "20px",
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "The most dependable platform i've ever used is Spara. They have outstanding dispute resolution ",
          "I always feel secure when i'm using Spara, They have a very quick response time. ",
        ]}
        multiTextDelay={1000}
        typeSpeed={10}
      />
    </div>
  );
};

export default Typewriter;
