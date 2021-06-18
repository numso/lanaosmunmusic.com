import React from 'react'
import styled from 'styled-components'

export default function Home () {
  return (
    <Wrapper>
      <h3>Downloadable LDS Christian Music</h3>
      <P>Welcome!!!</P>
      <p>This site contains a variety of music composed by Lana Osmun.</p>
      <p>
        Each song includes downloadable sheet music in PDF format and an MP3 to
        hear what the songs sound like. There is also an accompaniment track
        with no vocals.
      </p>
      <p>
        The music on the site is can be easily downloaded and is available for
        non-commercial church and personal use.
      </p>
      <P>Enjoy the Music!</P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & p {
    margin: 20px 0;
    font-weight: bold;
  }
`

const P = styled.p`
  text-align: center;
`
