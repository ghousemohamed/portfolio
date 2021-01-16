import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Button, Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Bio } from './styles';
import './styles.css';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <Bio theme={theme}>
            I'm Ghouse Mohamed and I'm a Full stack Developer. I have more than 1 year of experience working as a Full
            stack web developer and mobile developer. I’ve had the opportunity to work on many promising startups and
            businesses over the course of my opening career. I'm passionate about building powerful applications for the
            web and the mobile ecosystem. I love working on challenging problems, and it gives me great joy in solving
            problems involving a great deal of complexity. I'm very curious about new technology and new ways of doing
            things. I love to read about Software Architectures and best practices, and I try to translate that
            knowledge as much as possible into the work I do. When I'm not working, you can find me poring over the
            documentation of a newly introduced tool/framework or catch me working on a fun side project. Other than
            that, I love to read, swim and play badminton. And like to occasionally go on long runs.
          </Bio>
          <Button className="resumeButton" color="#8680FF" as="a" href="/GhouseMohamed.pdf" target="_blank">
            View my Resume
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
