import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
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
  width: 100%;
  height: auto;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.11);
  margin: 0px;
`;

export const Item = styled.div`
  -moz-box-shadow: 1px 2px 3px ${({ theme }) => (theme === 'light' ? '#ffffff' : '#212121')};
  -webkit-box-shadow: 1px 2px 3px ${({ theme }) => (theme === 'light' ? '#ffffff' : '#212121')};
  box-shadow: 10px 20px 30px ${({ theme }) => (theme === 'light' ? '#ffffff' : '#212121')};
  background: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#212121')};
  width: 100%;
  overflow: hidden;

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const ProjectName = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-transform: none;
  margin: 0px 0px 15px;
`;

export const A = styled.a`
  color: black;
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
  width: 46%;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  white-space: pre-wrap;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
  width: 80%;
`;

export const TechComponent = styled.div`
  background-color: #6c63ff;
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
