// import Image from 'next/image'
import React from 'react'

const newsItems = [
  {
    date: 'November 16, 2015',
    item: 'Added search functionality.'
  },
  {
    date: 'December 25, 2013',
    item:
      'The site is completely redesigned. Many thanks to my son Dallin, for being an awesome web designer.'
  },
  {
    date: 'November 29, 2009',
    item:
      'I added the MP3 files. There are still a few MP3’s and sheet music files missing.'
  },
  {
    date: 'November 06, 2009',
    item:
      'I finished adding all the lyric pages, well most of them. I’m going to add the PDF’s for the sheet music today.'
  },
  {
    date: 'November 01, 2009',
    item: 'Everything is new!'
  }
]

export default function News () {
  return (
    <div id='whats-new'>
      <h2>What's New</h2>
      <p>
        This is the place that I will post new things added to this site. Things
        like new songs, new links, new MP3 tracks, new arrangements, etc.
      </p>
      {newsItems.map((news, i) => (
        <div className='item' key={i}>
          <img src='/img/bullet.png' alt='' width={49} height={19} />
          {news.date} - {news.item}
        </div>
      ))}
    </div>
  )
}
