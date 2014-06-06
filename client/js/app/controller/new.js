/* global angular */
angular.module('lana').controller('newCtrl',
  function ($scope, news) {
    'use strict';

    news.getAll(function (err, allNews) {
      $scope.news = allNews;
    });
  }
);
