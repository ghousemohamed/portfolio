import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Avatar } from './styles';

const Navbar = ({ blog }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <Avatar as="img" src="/avatar.jpeg" />
        Ghouse Mohamed
      </Brand>
      <NavbarLinks desktop blog={blog} />
    </Wrapper>
  );
};

export default Navbar;
