
import React from 'react';
import AboutVideoArea from './MissionVission';
import AboutCounterArea from './Specialties';
import TeamAreaHomeOne from './Specialists';
import Carrousel from './Carousel'

const About = () => {
  return (
    <>
      <main>
        <Carrousel/>
        <AboutVideoArea />
        <AboutCounterArea />
        <TeamAreaHomeOne />
        <TeamAreaHomeOne />
      </main>
    </>
  );
};

export default About;