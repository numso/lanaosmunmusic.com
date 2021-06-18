import Link from 'next/link'

import '../styles/globals.css'
import styles from '../styles/main.module.css'

const nav = [
  { label: 'Home', url: '/' },
  { label: 'Song List', url: '/songs' },
  { label: "What's New", url: '/whats-new' },
  { label: 'About Me', url: '/about-me' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Contact Me', url: '/contact-me' }
]

export default function MyApp ({ Component, pageProps }) {
  return (
    <div id='app'>
      <div>
        <div className={styles.pad}>
          <h1 className={styles.title}>Lana Osmun Music</h1>
        </div>
        <div className={styles.pad}>
          <ul className={styles.nav}>
            {nav.map(item => (
              <Link key={item.url} href={item.url}>
                <a>{item.label}</a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.view}>
        <Component {...pageProps} />
      </div>
      <div className={styles.pad}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Lana Osmun
        </p>
      </div>
    </div>
  )
}
