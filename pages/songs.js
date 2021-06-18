import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import allSongs from '../data/songs'

const categories = [
  { key: '', label: 'All Songs' },
  { key: 'child', label: "Children's Songs" },
  { key: 'christmas', label: 'Christmas Songs' },
  { key: 'youth', label: 'Youth / Mission Songs' },
  { key: 'women', label: "Women's Songs" },
  { key: 'duet', label: 'Duets' }
]

export default function List () {
  const [search, setSearch] = React.useState('')
  const [category, setCategory] = React.useState('')
  let songs = allSongs
  if (category) {
    songs = songs.filter(song => song.cat[category])
  }
  if (search) {
    songs = songs.filter(song => {
      const songName = (song.name || '').toLowerCase()
      const searchText = (search || '').toLowerCase()
      return songName.indexOf(searchText) > -1
    })
  }
  return (
    <div>
      <h3>Song List</h3>
      <Controls>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat.key || 'default'} value={cat.key}>
              {cat.label}
            </option>
          ))}
        </select>
        <input
          type='text'
          placeholder='Search...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Controls>
      <div>
        {songs.map(song => (
          <Link key={song.id} href={`/song/${song.id}`} passHref>
            <Song>{song.name}</Song>
          </Link>
        ))}
      </div>
    </div>
  )
}

const Song = styled.a`
  background-color: #ce87e9;
  color: black;
  cursor: pointer;
  display: inline-block;
  margin: 5px 0;
  padding: 10px 0;
  padding-left: 20px;
  text-decoration: none;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    background-color: #740099;
    color: #eae2fb;
  }
`

const Controls = styled.div`
  display: flex;
  margin: 15px 0;

  & input {
    flex: 1;
    margin-left: 10px;
  }
`
