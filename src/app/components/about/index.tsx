import React from 'react';
import AboutVideoArea from './MissionVission';
import AboutCounterArea from './Specialties';
import TeamAreaHomeOne from './Specialists';
import Carrousel from './Carousel'
import Awards from './Awards'

const About = () => {
  return (
    <>
      <main>
        <Carrousel/>
        <AboutVideoArea />
        <AboutCounterArea />
        <TeamAreaHomeOne />
        <Awards />
      </main>
    </>
  );
};

export default About;