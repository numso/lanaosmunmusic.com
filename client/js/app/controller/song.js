/* global angular */
angular.module('lana').controller('songCtrl',
  function ($scope, $window, $stateParams, songs) {
    'use strict';

    $scope.title = $stateParams.name;

    songs.getOne($stateParams.name, function (err, song) {
      $scope.song = song;
    });

    $scope.download = function (link) {
      $window.open(link);
    };
  }
);
