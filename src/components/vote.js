import styled from 'styled-components'
import { useState } from 'react'

const Wrapper = styled.button`
  margin: 0;
  outline: none;
  border: none;
  padding: 0;
  background: black;
  padding: 3em;
  position: relative;
  width: 4em;
  height: 4em;
  cursor: pointer;
`

const Heart = styled.div`
  background: ${({ theme, like }) =>
    like ? theme.colors.red : theme.colors.lightGrey};
  position: absolute;
  top: 37%;
  left: 30%;
  height: 40%;
  width: 40%;
  transform: rotate(-45deg);
  transition: all 150ms ease-out;
  &:hover {
    transform: scale(1.05) rotate(-45deg);
  }
  &:before,
  &:after {
    content: '';
    border-radius: 50%;
    height: 100%;
    position: absolute;
    width: 100%;
    transition: all 150ms ease-out;
    background: ${({ theme, like }) =>
      like ? theme.colors.red : theme.colors.lightGrey};
  }
  &:before {
    left: 0;
    top: -50%;
  }
  &:after {
    left: 50%;
  }
`

const Vote = () => {
  const [like, setLike] = useState(false)
  const handleClick = () => {
    setLike(!like)
  }
  return (
    <Wrapper onClick={handleClick}>
      <Heart like={like} />
    </Wrapper>
  )
}

export default Vote
