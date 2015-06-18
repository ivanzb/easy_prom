'use strict';

/**
 * @ngdoc function
 * @name easyPromApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the easyPromApp
 */
angular.module('easyPromApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
