import fs from 'fs'
import path from 'path'
import React from 'react'
import styled from 'styled-components'

import songs from '../../data/songs'

const download = url => window.open(url, '_blank')

export default function Song ({ id, info, lyrics, name, meta, imgSrc }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <Links>
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
      </Links>
      {meta.img && <img src={imgSrc} />}
      <Info>{info}</Info>
      <Title>{name}</Title>
      {lyrics.map((verse, i) => (
        <Verse key={i}>
          {verse.map((line, j) => (
            <Line key={j}>{line}</Line>
          ))}
        </Verse>
      ))}
    </Wrapper>
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

const Wrapper = styled.div`
  & img {
    float: right;
    padding: 20px;
  }
`

const Links = styled.div`
  text-align: center;
  padding-top: 10px;
`

const Info = styled.div`
  padding-top: 10px;
  font-style: italic;
`

const Title = styled.div`
  padding-top: 30px;
  text-align: center;
  font-size: 20px;
  clear: both;
`

const Verse = styled.div`
  padding-top: 20px;
`

const Line = styled.div`
  text-align: center;
`
