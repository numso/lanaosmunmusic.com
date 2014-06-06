/* global angular */
angular.module('lana').controller('listCtrl',
  function ($scope, $state, songs) {
    'use strict';

    $scope.sortings = [
      {
        label: 'All Songs',
        sort: ''
      },
      {
        label: 'Children\'s Songs',
        sort: 'child'
      },
      {
        label: 'Christmas Songs',
        sort: 'christmas'
      },
      {
        label: 'Youth / Mission Songs',
        sort: 'youth'
      },
      {
        label: 'Women\'s Songs',
        sort: 'women'
      },
      {
        label: 'Duets',
        sort: 'duet'
      }
    ];
    $scope.sortBy = $scope.sortings[0];

    $scope.filterSongs = function (el) {
      var key = $scope.sortBy.sort;
      if (!key) return true;
      if (!el.cat) return false;
      return el.cat[key];
    };

    songs.getAll(function (err, songs) {
      $scope.songs = songs;
    });

    $scope.goto = function (song) {
      $state.transitionTo('song', { name: song.name });
    };
  }
);
