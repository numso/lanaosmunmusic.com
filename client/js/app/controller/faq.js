/* global angular */
angular.module('lana').controller('faqCtrl',
  function ($scope) {
    'use strict';

    $scope.faqs = [
      {
        question: 'Are your songs copy written?',
        answer: 'Yes'
      },
      {
        question: 'Can I use your music for free?',
        answer: 'Yes'
      },
      {
        question: 'Will you change the key signature for me?',
        answer: 'Maybe, if I have time.',
        right: {
          name: 'email me',
          href: 'mailto:lana@osmun.net'
        }
      },
      {
        question: 'Can I change the music or the lyrics?',
        answer: 'No please'
      },
      {
        question: 'What do I need to download the music?',
        answer: ', it’s free',
        left: {
          name: 'Adobe reader',
          href: 'http://get.adobe.com/reader/'
        }
      }
    ];
  }
);
