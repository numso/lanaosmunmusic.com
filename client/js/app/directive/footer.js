/* global angular */
angular.module('lana').directive('footer',
  function () {
    'use strict';
    return {
      templateUrl: 'tmpl/footer.html',
      controller: 'footerCtrl'
    };
  }
);
