/* global angular */
angular.module('lana').controller('headerCtrl',
  function ($scope, $state, nav) {
    'use strict';
    $scope.nav = nav;

    $scope.goto = function (item) {
      $state.transitionTo(item.state);
    };
  }
);
