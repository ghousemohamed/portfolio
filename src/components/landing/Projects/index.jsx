import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, Title } from 'components/common';
import Tilt from 'react-tilt';
import { Wrapper, Grid, Item, Image, ImageContainer, Content, Stack, TechComponent } from './styles';

import { PROJECTS } from '../../../../env';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const edges = Object.entries(PROJECTS);
  return (
    <Wrapper as={Container} id="projects">
      <Title>Work Experience</Title>
      <Grid>
        {edges.map(([projectName, { image, description, siteUrl, stack }], index) => (
          <Item key={index} theme={theme}>
            <Card theme={theme} reverse={index % 2 === 0}>
              <Content>
                <h2>{projectName}</h2>
                <p>{description}</p>
                <Stack>
                  {stack.map(tech => (
                    <TechComponent key={tech}>{tech}</TechComponent>
                  ))}
                </Stack>
              </Content>
              <ImageContainer as="a" href={siteUrl} target="_blank" rel="noopener noreferrer">
                <Tilt options={{ max: 20, scale: 1 }}>
                  <Image src={image} />
                </Tilt>
              </ImageContainer>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
