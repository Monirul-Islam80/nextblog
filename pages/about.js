import React, { useEffect, useRef } from "react";

const About = () => {
  const x = useRef();
  const y = useRef();

  return (
    <>
      <div style={{ width: "fit-content", margin: "auto" }}>
        <h1 style={{ width: "fit-content", margin: "auto" }}>About Us</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          possimus officia molestiae non labore eaque aliquam, ducimus expedita
          alias distinctio esse illum
          <br /> Ipsam recusandae dolorem nobis illum doloremque quis
          reprehenderit odit quasi asperiores incidunt natus, deleniti excepturi
          quam amet dolore?
        </span>
      </div>
    </>
  );
};

export default About;
