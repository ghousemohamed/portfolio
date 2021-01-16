import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (!reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 15px 0px;
  height: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
