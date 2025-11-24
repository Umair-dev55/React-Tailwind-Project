import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
const App = () => {
  return (
    <>
      <Navbar user="Header" />
      <Card
        image="https://images.pexels.com/photos/18098778/pexels-photo-18098778.jpeg"
        sectionName="Hero Section"
        paragraph="Hi Its Hero Section"
      />
      <Card
        image="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg"
        sectionName="2nd Hero Section"
        paragraph="Hi Its 2nd Hero Section"
      />
      <Card
        image="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg"
        sectionName="3rd Hero Section"
        paragraph="Hi Its 3rd Hero Section"
      />
    </>
  );
};

export default App;
