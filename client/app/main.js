/* @flow */

import {map} from 'lodash'
import React, {Component, PropTypes} from 'react'

import styles from './main.styl'

const nav = [
  { label: 'Home', url: '#/' },
  { label: 'Song List', url: '#/songs' },
  { label: 'What\'s New', url: '#/whats-new' },
  { label: 'About Me', url: '#/about-me' },
  { label: 'FAQ', url: '#/faq' },
  { label: 'Contact Me', url: '#/contact-me' }
]

export default class Main extends Component {

  displayName: 'Main';

  props: {
    children: Node;
  };

  render(): ReactElement {
    return (
      <div>
        <div>
          <div className={styles.pad}>
            <h1 className={styles.title}>
              Lana Osmun Music
            </h1>
          </div>
          <div className={styles.pad}>
            <ul className={styles.nav}>
              {map(nav, item => <a href={item.url}>{item.label}</a>)}
            </ul>
          </div>
        </div>
        <div className={styles.view}>
          {this.props.children}
        </div>
        <div className={styles.pad}>
          <p className={styles.copyright}>
            © {(new Date()).getFullYear()} Lana Osmun
          </p>
        </div>
      </div>
    )
  }

}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
