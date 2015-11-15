/* @flow */

import React, {Component} from 'react'

import styles from './home.styl'

export default class Home extends Component {

  displayName: 'Home';

  render(): ReactElement {
    return (
      <div className={styles.wrapper}>
        <h3>Downloadable LDS Christian Music</h3>
        <p className={styles.sub}>Welcome!!!</p>
        <p>This site contains a variety of music composed by Lana Osmun.</p>
        <p>
          Each song includes downloadable sheet music in PDF format and an MP3
          to hear what the songs sound like. There is also an accompaniment
          track with no vocals.
        </p>
        <p>
          The music on the site is can be easily downloaded and is available for
          non-commercial church and personal use.
        </p>
        <p className={styles.sub}>Enjoy the Music!</p>
      </div>
    )
  }

}
