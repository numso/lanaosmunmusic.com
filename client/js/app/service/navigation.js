/* global angular */

var nav;
nav = [
  {
    label: 'Home',
    state: 'index',
    url: '/',
    tmpl: 'tmpl/main.html',
    ctrl: 'mainCtrl'
  },
  {
    label: 'Song List',
    state: 'list',
    url: '/SongList',
    tmpl: 'tmpl/list.html',
    ctrl: 'listCtrl'
  },
  {
    label: 'What\'s New',
    state: 'new',
    url: '/WhatsNew',
    tmpl: 'tmpl/new.html',
    ctrl: 'newCtrl'
  },
  {
    label: 'About Me',
    state: 'about',
    url: '/AboutMe',
    tmpl: 'tmpl/about.html',
    ctrl: 'aboutCtrl'
  },
  {
    label: 'FAQ',
    state: 'faq',
    url: '/FAQ',
    tmpl: 'tmpl/faq.html',
    ctrl: 'faqCtrl'
  },
  {
    label: 'Contact Me',
    state: 'contact',
    url: '/ContactMe',
    tmpl: 'tmpl/contact.html',
    ctrl: 'contactCtrl'
  }
];

angular.module('lana').factory('nav',
  function () {
    'use strict';
    return nav;
  }
);
