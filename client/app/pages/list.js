/* @flow */

import {filter, map} from 'lodash'
import React, {Component} from 'react'

import categories from '../data/categories'
import allSongs from '../data/songs'
import styles from './list.styl'

type LinkState<T> = {
  requestChange: (val: T) => void;
  value: T;
};

export default class List extends Component {

  displayName: 'List';

  constructor() {
    super()
    this.state = {
      songs: allSongs,
      filterBy: '',
      search: ''
    }
  }

  link(key: string): LinkState<string> {
    return {
      requestChange: val => {
        var newState = {}
        newState[key] = val
        this.setState(newState)
      },
      value: this.state[key]
    }
  }

  render(): ReactElement {
    let {filterBy, search, songs} = this.state
    if (filterBy) {
      songs = filter(songs, song => song.cat[filterBy])
    }
    if (search) {
      songs = filter(songs, song => {
        let songName = (song.name || '').toLowerCase()
        let searchText = (search || '').toLowerCase()
        return songName.indexOf(searchText) > -1
      })
    }
    return (
      <div>
        <h3>Song List</h3>
        <div className={styles.controls}>
          <select valueLink={this.link('filterBy')}>
            {map(categories, cat => (
              <option value={cat.key}>{cat.label}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search..."
            valueLink={this.link('search')}
          />
        </div>
        <div>
          {map(songs, song => (
            <a
              className={styles.song}
              href={`#/song/${song.id}`}
              children={song.name}
            />
          ))}
        </div>
      </div>
    )
  }

}
