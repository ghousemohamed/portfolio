import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Title } from 'components/common';
import { Card, Wrapper, Grid, Item, Image, Content } from './styles';

import { SKILLS } from '../../../../env';

export const TechStack = () => {
  const { theme } = useContext(ThemeContext);
  const edges = Object.entries(SKILLS);
  return (
    <Wrapper as={Container} id="skillset">
      <Title>Proficiency</Title>
      <Grid>
        {edges.map(([key, { name, image }]) => (
          <Item key={key} theme={theme}>
            <Card theme={theme}>
              <Content>
                <p>{name}</p>
                <Image src={image} alt="name"></Image>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
