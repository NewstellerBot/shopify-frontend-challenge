import styled from 'styled-components'
import { useState } from 'react'
import Button from './button'
import Vote from './vote'

const ImageWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10%;
`

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`

const Description = styled.div`
  background: black;
  color: white;
  padding: 1rem;
  max-width: clamp(150px, 35%, 500px);
  bottom: 15%;
  left: 50px;
  display: flex;
  flex-direction: column; 
  gap: 0.7rem; 
  }
`

const Date = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

const DescriptionParagraph = styled.p`
  margin: 0;
  ${({ open }) =>
    !open &&
    `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`}
  transition: all 250ms ease-out;
  max-height: 50vh;
  overflow-y: scroll;
`

const Image = ({ url, date, explanation, title }) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <ImageWrapper src={url}>
      <Description>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <DescriptionParagraph open={open}>{explanation}</DescriptionParagraph>
        <Button onClick={handleClick}>{open ? 'See less' : 'See more'}</Button>
      </Description>
      <Vote />
    </ImageWrapper>
  )
}

export default Image
