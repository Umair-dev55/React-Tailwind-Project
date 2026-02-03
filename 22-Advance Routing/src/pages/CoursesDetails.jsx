import React from "react";
import { useParams } from "react-router";

const CoursesDetails = () => {
  let params = useParams();
  let parameter = params.id;

  return (
    <div>
      <h1>{parameter}CoursesDetails</h1>
    </div>
  );
};

export default CoursesDetails;
