import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, TechStack } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <TechStack />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
