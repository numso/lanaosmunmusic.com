/* global angular */
angular.module('lana').factory('news',
  function () {
    'use strict';

    var newsDB = [
      {
        date: 1387954800000,
        item: 'The site is completely redesigned. Many thanks to my son Dallin, for being an awesome web designer.'
      },
      {
        date: 1259478000000,
        item: 'I added the MP3 files. There are still a few MP3’s and sheet music files missing.'
      },
      {
        date: 1257490800000,
        item: 'I finished adding all the lyric pages, well most of them.  I’m going to add the PDF’s for the sheet music today.'
      },
      {
        date: 1257055200000,
        item: 'Everything is new!'
      }
    ];

    function getAll(cb) {
      cb(null, newsDB);
    }

    return {
      getAll: getAll
    };
  }
);
