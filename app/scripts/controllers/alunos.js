'use strict';

/**
 * @ngdoc function
 * @name easyPromApp.controller:AlunoCtrl
 * @description
 * # AlunoCtrl
 * Controller of the easyPromApp
 */
angular.module('easyPromApp')
.controller('AlunoCtrl', function ($scope,$http) {
	$scope.alunos=[];
	$http.get('http://localhost:7878/alunos').
    success(function(data) {
    	$scope.alunos = data;
    });	
	
	$(document).ready(function(){
		
	});

});
