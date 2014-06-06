/* global angular */
angular.module('lana').controller('footerCtrl',
  function ($scope) {
    'use strict';
    $scope.date = new Date();
  }
);
