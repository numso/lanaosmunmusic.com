import React from 'react'
import styled from 'styled-components'

export default function Contact () {
  return (
    <div>
      <h3>Contact Me</h3>
      <P>
        The best way to get ahold of me is through{' '}
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='mailto:lana@osmun.net'
        >
          email
        </a>
        . Please let me know your name and why you're contacting me. Also, make
        sure to mention "LanaOsmunMusic" in the subject of the email. Thanks!
      </P>
    </div>
  )
}

const P = styled.p`
  padding-top: 20px;
`
