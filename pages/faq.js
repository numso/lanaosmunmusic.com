import React from 'react'

const faqs = [
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
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='mailto:lana@osmun.net'
        >
          Email me
        </a>
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
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='http://get.adobe.com/reader/'
        >
          Adobe Reader
        </a>
        , it’s free
      </span>
    )
  }
]

export default function Faq () {
  return (
    <div id='faq'>
      <h3>Frequently Asked Questions</h3>
      <p>
        Well, I don't really have that many questions asked of me, but here are
        a few :)
      </p>
      <table>
        {faqs.map((faq, i) => (
          <tr key={i}>
            <td>{faq.question}</td>
            <td>{faq.answer}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
