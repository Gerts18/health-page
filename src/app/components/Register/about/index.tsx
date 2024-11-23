
import React from 'react';
import AboutVideoArea from './AboutVideoArea';
import AboutCounterArea from './AboutCounterArea';
import AboutAppoinment from './AboutAppoinment';
import TeamAreaHomeOne from './TeamAreaHomeOne';

const About = () => {
  return (
    <>
      <main>
        <AboutAppoinment />
        <AboutVideoArea />
        <AboutCounterArea />
        <TeamAreaHomeOne />
        <TeamAreaHomeOne />
      </main>
    </>
  );
};

export default About;