import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;

export const Avatar = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0px 10px 0px 0px;
`;
