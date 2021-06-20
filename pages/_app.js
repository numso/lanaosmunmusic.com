import Link from 'next/link'
import React from 'react'

import '../styles/globals.css'

const nav = [
  { label: 'Home', url: '/' },
  { label: 'Song List', url: '/songs' },
  { label: "What's New", url: '/whats-new' },
  { label: 'About Me', url: '/about-me' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Contact Me', url: '/contact-me' }
]

export default function App ({ Component, pageProps }) {
  React.useEffect(() => {
    const [hash] = window.location.hash.substr(1).split('?_k')
    if (hash) window.location = hash
  }, [])
  return (
    <div id='app'>
      <header>
        <h1>Lana Osmun Music</h1>
        <nav>
          <ul>
            {nav.map(item => (
              <li key={item.url}>
                <Link href={item.url}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>© {new Date().getFullYear()} Lana Osmun</footer>
    </div>
  )
}
