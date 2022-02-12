import styled, { css } from 'styled-components';
const buttonSelector = props => {
  if (props.issigninWithGoogle) return GoogleSignIn;

  return props.inverted ? Inverted : customButton;
};
const GoogleSignIn = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #3579e8;
    border: none;
  }
`;
const Inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  font-family: inherit;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);
  }
`;
const customButton = css`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const CustumButtonStyle = styled.Button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${buttonSelector}
`;
