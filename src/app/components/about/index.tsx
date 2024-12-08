
import React from 'react';
import AboutVideoArea from './assets/MissionVission';
import AboutCounterArea from './assets/Specialties';
import TeamAreaHomeOne from './assets/Specialists';
import Carrousel from './assets/Carousel';
import Awards from './assets/Awards';
import Header from '../Header/Index';
import Footer from '../Footer/Footer';

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