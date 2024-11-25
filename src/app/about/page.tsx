
import React from 'react';
import AboutVideoArea from '../components/about/assets/MissionVission';
import AboutCounterArea from '../components/about/assets/Specialties';
import TeamAreaHomeOne from '../components/about/assets/Specialists';
import Carrousel from '../components/about/assets/Carousel';
import Awards from '../components/about/assets/Awards';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Footer';

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