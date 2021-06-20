import fs from 'fs'
import Image from 'next/image'
import path from 'path'
import React from 'react'

import songs from '../../data/songs'

export default function Song ({ id, info, lyrics, name, meta, img }) {
  const buttons = [
    {
      label: 'Sheet Music',
      href: id => `/img/sheetmusic/${id}.pdf`,
      enabled: 'sheetmusic'
    },
    {
      label: 'MP3',
      href: id => `/snd/mp3/${id}.mp3`,
      enabled: 'mp3'
    },
    {
      label: 'MP3 Accompaniment',
      href: id => `/snd/mp3a/${id}.mp3`,
      enabled: 'mp3a'
    },
    {
      label: 'Sheet Music SATB',
      href: id => `/img/satb/${id}.pdf`,
      enabled: 'satb'
    }
  ]
  return (
    <div id='song'>
      <h2>{name}</h2>
      <div className='links'>
        {buttons.map((button, i) =>
          meta[button.enabled] ? (
            <a key={i} className='btn' href={button.href(id)} download>
              {button.label}
            </a>
          ) : (
            <button key={i} className='btn' disabled>
              {button.label}
            </button>
          )
        )}
      </div>
      <div className='info'>
        <span>{info}</span>
        {meta.img && (
          <div>
            <Image src={img.src} alt='' width={img.width} height={img.height} />
          </div>
        )}
      </div>
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
  let src = `/img/songs/${id}.png`
  if (!fs.existsSync(path.join(publicDir, src))) {
    src = '/img/songs/default.png'
  }
  return {
    props: {
      ...song,
      img: {
        src,
        width: song?.image?.width ?? 90,
        height: song?.image?.height ?? 90
      }
    }
  }
}
