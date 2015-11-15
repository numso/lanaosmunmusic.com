/* @flow */

import {find, map} from 'lodash'
import React, {Component} from 'react'

import songs from '../data/songs'
import styles from './song.styl'

export default class Song extends Component {

  displayName: 'Song';

  constructor(props) {
    super(props)
    this.state = find(songs, {id: props.params.id}) || {}
  }

  download(url) {
    window.open(url, '_blank')
  }

  render(): ReactElement {
    let {id, info, lyrics, name, meta} = this.state
    return (
      <div className={styles.wrapper}>
        <h3>{name}</h3>
        <div className={styles.links}>
          <button
            className="btn"
            disabled={!meta.sheetmusic}
            onClick={() => this.download(`img/sheetmusic/${id}.pdf`)}
            children="Sheet Music"
          />
          <button
            className="btn"
            disabled={!meta.mp3}
            onClick={() => this.download(`snd/mp3/${id}.mp3`)}
            children="MP3"
          />
          <button
            className="btn"
            disabled={!meta.mp3a}
            onClick={() => this.download(`snd/mp3a/${id}.mp3`)}
            children="MP3 Accompaniment"
          />
          <button
            className="btn"
            disabled={!meta.satb}
            onClick={() => this.download(`img/satb/${id}.pdf`)}
            children="Sheet Music SATB"
          />
        </div>
        {meta.img && <img src={`img/songs/${id}.png`}/>}
        <div className={styles.info}>{info}</div>
        <div className={styles.title}>{name}</div>
        {map(lyrics, verse => (
          <div className={styles.verse}>
            {map(verse, line => <div className={styles.line}>{line}</div>)}
          </div>
        ))}
      </div>
    )
  }

}
