/* global angular, _ */
angular.module('lana').controller('aboutCtrl',
  function ($scope) {
    'use strict';

    var actions = [
      'play the piano',
      'read',
      'make great cookies',
      'eat chocolate',
      'sew',
      'tell jokes',
      'play with our puppies',
      'make cakes',
      'watch tv',
      'spend time with my family'
    ];

    function getUniqueAction() {
      var rand = Math.floor(Math.random() * actions.length);
      var newAction = actions[rand];
      if (_.contains($scope.action, newAction))
        return getUniqueAction();
      $scope.action.push(newAction);
    }

    $scope.action = [];

    getUniqueAction();
    getUniqueAction();
    getUniqueAction();
  }
);
