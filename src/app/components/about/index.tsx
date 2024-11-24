
import React from 'react';
import AboutVideoArea from './MissionVission';
import AboutCounterArea from './Specialties';
import TeamAreaHomeOne from './Specialists';
import Carrousel from './Carousel';
import Awards from './Awards';
import Header from '../Header/index';
import Footer from '../Footer/index';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Carrousel/>
        <AboutVideoArea />
        <AboutCounterArea />
        <TeamAreaHomeOne />
        <Awards />
      </main>
      <Footer />
    </>
  );
};

export default About;