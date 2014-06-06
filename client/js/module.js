/* global angular, _, nav */
angular.module('lana', ['ui.bootstrap', 'ui.router']).config(
  function ($stateProvider, $urlRouterProvider) {
    'use strict';

    _.each(nav, function (item) {
      $stateProvider.state(item.state, {
        templateUrl: item.tmpl,
        controller: item.ctrl,
        url: item.url
      });
    });

    $stateProvider.state('song', {
      templateUrl: 'tmpl/song.html',
      controller: 'songCtrl',
      url: '/song/:name'
    });

    $urlRouterProvider.otherwise('/');
  }
);
