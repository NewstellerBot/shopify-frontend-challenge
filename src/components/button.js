import styled from 'styled-components'

const StyledButton = styled.button`
  margin: 0;
  outline: none;
  border: none;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  background: transparent;
  color: white;
  font-size: 0.8rem;
  border: 0.1em solid white;
  cursor: pointer;
  transition: all 250ms ease-out;

  &:hover {
    background: white;
    color: black;
  }

  &:active {
    transform: scale(0.95);
  }
`

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
