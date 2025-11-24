import React from "react";
import Card from "./components/Card";
import UserName from "./components/UserName";

const App = () => {
  const jobsOpening = [
    {
      company: "Google",
      logo: "https://logo.clearbit.com/google.com",
      posted: "3 days ago",
      position: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "120$/hr",
      location: "PK, Lahore",
    },
    {
      company: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      posted: "1 day ago",
      position: "Data Analyst",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "135$/hr",
      location: "PK, Karachi",
    },
    {
      company: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
      posted: "5 days ago",
      position: "Product Manager",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "140$/hr",
      location: "PK, Islamabad",
    },
    {
      company: "Meta",
      logo: "https://logo.clearbit.com/meta.com",
      posted: "2 days ago",
      position: "Frontend Developer",
      tag1: "Part-time",
      tag2: "Intern",
      pay: "95$/hr",
      location: "PK, Lahore",
    },
    {
      company: "Apple",
      logo: "https://logo.clearbit.com/apple.com",
      posted: "4 days ago",
      position: "UX/UI Designer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "155$/hr",
      location: "PK, Faisalabad",
    },
    {
      company: "Netflix",
      logo: "https://logo.clearbit.com/netflix.com",
      posted: "6 days ago",
      position: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "130$/hr",
      location: "PK, Lahore",
    },
    {
      company: "Tesla",
      logo: "https://logo.clearbit.com/tesla.com",
      posted: "1 day ago",
      position: "AI/ML Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "165$/hr",
      location: "PK, RWP",
    },
    {
      company: "Adobe",
      logo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      posted: "3 days ago",
      position: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "125$/hr",
      location: "PK, Multan",
    },
    {
      company: "Salesforce",
      logo: "https://logo.clearbit.com/salesforce.com",
      posted: "2 days ago",
      position: "Cloud Architect",
      tag1: "Part-time",
      tag2: "Senior-level",
      pay: "150$/hr",
      location: "PK, Lahore",
    },
    {
      company: "IBM",
      logo: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
      posted: "4 days ago",
      position: "Data Scientist",
      tag1: "Full-time",
      tag2: "Intern",
      pay: "100$/hr",
      location: "PK, Peshawar",
    },
  ];
  return (
    <>
      <div className="parent  bg-black flex justify-evenly flex-wrap">
        {jobsOpening.map((val,idx) => {
          return (
            <div key={idx}>
              <Card
                name={val.company}
                logo={val.logo}
                posted={val.posted}
                position={val.position}
                tag1={val.tag1}
                tag2={val.tag2}
                pay={val.pay}
                location={val.location}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
