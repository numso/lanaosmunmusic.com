import fs from 'fs'
import path from 'path'
import React from 'react'

import songs from '../../data/songs'

const download = url => window.open(url, '_blank')

export default function Song ({ id, info, lyrics, name, meta, imgSrc }) {
  return (
    <div id='song'>
      <h3>{name}</h3>
      <div className='links'>
        <button
          className='btn'
          disabled={!meta.sheetmusic}
          onClick={() => download(`/img/sheetmusic/${id}.pdf`)}
        >
          Sheet Music
        </button>
        <button
          className='btn'
          disabled={!meta.mp3}
          onClick={() => download(`/snd/mp3/${id}.mp3`)}
        >
          MP3
        </button>
        <button
          className='btn'
          disabled={!meta.mp3a}
          onClick={() => download(`/snd/mp3a/${id}.mp3`)}
        >
          MP3 Accompaniment
        </button>
        <button
          className='btn'
          disabled={!meta.satb}
          onClick={() => download(`/img/satb/${id}.pdf`)}
        >
          Sheet Music SATB
        </button>
      </div>
      {meta.img && <img src={imgSrc} />}
      <div className='info'>{info}</div>
      <div className='title'>{name}</div>
      {lyrics.map((verse, i) => (
        <div className='verse' key={i}>
          {verse.map((line, j) => (
            <div className='line' key={j}>
              {line}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export async function getStaticPaths () {
  const paths = songs.map(song => ({ params: { id: song.id } }))
  return { paths, fallback: false }
}

export async function getStaticProps ({ params: { id } }) {
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.statSync(publicDir).isDirectory()) {
    throw new Error('Could not find public directory')
  }
  const song = songs.find(song => song.id === id) || {}
  let imgSrc = `/img/songs/${id}.png`
  if (!fs.existsSync(path.join(publicDir, imgSrc))) {
    imgSrc = '/img/songs/default.png'
  }

  return { props: { ...song, imgSrc } }
}
