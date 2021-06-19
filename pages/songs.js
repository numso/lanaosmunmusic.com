import Link from 'next/link'
import React from 'react'

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
    <div id='songs'>
      <h3>Song List</h3>
      <div className='controls'>
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
      </div>
      <div>
        {songs.map(song => (
          <Link key={song.id} href={`/song/${song.id}`} passHref>
            <a className='song'>{song.name}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}
