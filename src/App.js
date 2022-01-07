import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import shopify from './assets/img/Shopify-Logo.png'
import Image from './components/image'
import { useAppHeight } from './hooks/useAppHeight'

const Wrapper = styled.main`
  // height: 100vh;
  // height: -webkit-fill-available;
  overflow-y: scroll;
  display: flex;
  flex-flow: column nowrap;
  flex: none;
  scroll-snap-type: y mandatory;

  & > * {
    scroll-snap-align: start;
    min-height: 100%;
  }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  height: 150px;
  width: 150px;
  border: 0.7em solid white;
  border-radius: 50%;
  border-top: 0.7em solid ${({ theme }) => theme.colors.primary};
  animation: ${rotate} 1s linear infinite;
`

const ErrorHeader = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`

const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 3rem;
`

const LoadingHeader = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  color: white;
`

const LoadingWrapper = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Title = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: white;
  color: black;
  text-align: center;
`

const Logo = styled.img`
  display: inline;
  height: 7rem;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  flex-direction: column;
`

const Email = styled.a`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const App = () => {
  const height = useAppHeight()
  const config = {
    url: 'https://api.nasa.gov/planetary/apod?api_key=aGp9XPUPsp6wA2fNh5YZ7rrqLT0Nh4mLeGanHB2M&count=10',
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(config.url)
        setData(res.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [config.url])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  return (
    <Wrapper dir="ltr" style={{ height: height }}>
      {error && (
        <LoadingWrapper>
          <Error>Error!</Error>
          <ErrorHeader>{error}</ErrorHeader>
        </LoadingWrapper>
      )}
      {loading && (
        <LoadingWrapper>
          <Loading />
          <LoadingHeader>Loading...</LoadingHeader>
        </LoadingWrapper>
      )}
      {data && (
        <>
          <Title>
            NASA frontend challege for interns for <Logo src={shopify} />
          </Title>
          {data.map((item) => {
            return <Image key={item.date} {...item} />
          })}
        </>
      )}
      <Footer>
        <h1>Created by Krystian Nowak</h1>
        <Email href="mailto: krystiannowak212@gmail.com">Email</Email>
        <p>2022</p>
      </Footer>
    </Wrapper>
  )
}

export default App
