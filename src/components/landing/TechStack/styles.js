import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px;
`;

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin-top: 20px;
  @media (max-width: 960px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const Image = styled.img`
  max-width: 3rem;
  max-height: 3rem;
  min-height: 30px;
`;

export const Item = styled.div`
  background: ${({ theme }) => (theme === 'light' ? 'white' : 'rgba(134, 128, 255, 0.7)')};
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.11);
  width: 120px;
  height: 120px;
  transition: all 0.4s;
  cursor: pointer;

  :hover {
    transform: scale(1.1, 1.1);
  }

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
  width: 80%;
`;

export const TechComponent = styled.div`
  background-color: purple;
  color: white;
  font-size: 10px;
  margin: 5px;
  padding: 5px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;
