/* @flow */

import React from 'react'

export default [
  {
    question: 'Are your songs copy written?',
    answer: 'Yes'
  },
  {
    question: 'Can I use your music for free?',
    answer: 'Yes'
  },
  {
    question: 'Will you change the key signature for me?',
    answer: (
      <span>
        Maybe, if I have time.
        <a target="_blank" href="mailto:lana@osmun.net">Email me</a>
      </span>
    )
  },
  {
    question: 'Can I change the music or the lyrics?',
    answer: 'No please'
  },
  {
    question: 'What do I need to download the music?',
    answer: (
      <span>
        <a target="_blank" href="http://get.adobe.com/reader/">Adobe Reader</a>,
        it’s free
      </span>
    )
  }
]
