
import React from 'react';
import AboutVideoArea from './MissionVission';
import AboutCounterArea from './AboutCounterArea';
import TeamAreaHomeOne from './TeamAreaHomeOne';
import Carrousel from './HeroSliderHomeOne'
//import './index.css';

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