'use strict';

/**
 * @ngdoc function
 * @name easyPromApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easyPromApp
 */
angular.module('easyPromApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'xar',
      'AngularJS',
      'Karma'
    ];
    $scope.tenso='teste';
    
    $scope.chamento = function(){
    	if($scope.tenso=='teste')
    	$scope.tenso='peido';
    	else
    	$scope.tenso='teste';
    }
    $scope.troca = function(obj){
    	$scope.tenso=obj;
    }
  });
