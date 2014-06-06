/* global angular */
angular.module('lana').directive('header',
  function () {
    'use strict';
    return {
      templateUrl: 'tmpl/header.html',
      controller: 'headerCtrl'
    };
  }
);
