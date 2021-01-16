import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 0.7rem 2.5rem;
  margin: 3px;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
  ${({ color }) =>
    color &&
    `
		background-color: ${color};
	`}
`;
