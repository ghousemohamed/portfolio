import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, Title } from 'components/common';
import Tilt from 'react-tilt';
import {
  Wrapper,
  Grid,
  Item,
  Image,
  ImageContainer,
  Content,
  Stack,
  TechComponent,
  ProjectName,
  A,
  Description,
} from './styles';

import { PROJECTS } from '../../../../env';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const edges = Object.entries(PROJECTS);
  return (
    <Wrapper as={Container} id="projects">
      <Title>Work Experience</Title>
      <Grid>
        {edges.map(([projectName, { image, description, siteUrl, stack, timeframe }], index) => (
          <Item key={index} theme={theme}>
            <Card theme={theme} reverse={index % 2 === 0}>
              <Content>
                <ProjectName>
                  <A href={`${siteUrl}`} rel="noreferrer" target="_blank">
                    {projectName}
                  </A>
                </ProjectName>
                <p>{timeframe}</p>
                <Description>{description}</Description>
                <Stack>
                  {stack.map(tech => (
                    <TechComponent key={tech}>{tech}</TechComponent>
                  ))}
                </Stack>
              </Content>
              <ImageContainer
                as="a"
                href={siteUrl || 'https://ghousemohamed.tech'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tilt options={{ max: 20, scale: 1 }}>
                  <Image src={image} alt="name" />
                </Tilt>
              </ImageContainer>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
