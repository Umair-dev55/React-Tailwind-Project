import React from "react";
import Section1 from "./component/section-1/Section1";
import Section2 from "./component/section-2/Section2";

const App = () => {
  const users = [
    {
      img: "https://i.pinimg.com/736x/18/91/0d/18910d90a8e475f5cf9a1565e372579d.jpg",
      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, ro?",
      tag: "Satisfied",
      color: "blue",
    },
    {
      img: "https://i.pinimg.com/736x/bf/01/78/bf01785ea53028dcddfa4eaa3794291e.jpg",
      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,ero?",
      tag: "UnderSeved",
      color: "black",
    },
    {
      img: "https://i.pinimg.com/736x/ad/7f/ac/ad7fac69ceb6ab85cd206ffc8a32dd31.jpg",

      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,ero?",
      tag: "banked",
      color:"red",
    },
    {
      img: "https://i.pinimg.com/736x/04/a7/fb/04a7fbfc8dcf84d5d194c044b4d2d258.jpg",
      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, ab ",
      tag: "Underbanked",
      color:"cyan",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
