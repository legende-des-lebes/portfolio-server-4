// src/Overlay.js

import React from 'react';

const Section = (props) => {
  return (
    <section>
      <div className="content-wrapper">{props.children}</div>
    </section>
  );
};

export const Overlay = () => {
  return (
    <div className="overlay-container">
      {/* All your HTML content from before goes here */}
       <Section><h1>Welcome</h1></Section>
       <Section><h2>Student Projects</h2></Section>
       <Section><h2>Professor Resources</h2></Section>
       {/* etc... */}
    </div>
  );
};