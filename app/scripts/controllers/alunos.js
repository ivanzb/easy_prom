'use strict';

/**
 * @ngdoc function
 * @name easyPromApp.controller:AlunoCtrl
 * @description
 * # AlunoCtrl
 * Controller of the easyPromApp
 */
angular.module('easyPromApp')
.controller('AlunoCtrl', function ($scope,rest) {
	$scope.alunos=[];
	rest.getAlunos().success(function(data){
		$scope.alunos = data;
	});	     
	
	$(document).ready(function(){
		
	});

});
