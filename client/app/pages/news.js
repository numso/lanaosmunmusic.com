/* @flow */

import {map} from 'lodash'
import React, {Component} from 'react'

import newsItems from '../data/news-items'
import styles from './news.styl'

export default class News extends Component {

  displayName: 'News';

  render(): ReactElement {
    return (
      <div>
        <h3>What's New</h3>
        <p className={styles.body}>
          This is the place that I will post new things added to this site.
          Things like new songs, new links, new MP3 tracks, new arrangements,
          etc.
        </p>
        {map(newsItems, news => (
          <div className={styles.item}>
            <img src="img/bullet.png"/>
            {news.date} - {news.item}
          </div>
        ))}
      </div>
    )
  }

}
