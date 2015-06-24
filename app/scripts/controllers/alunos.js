'use strict';

/**
 * @ngdoc function
 * @name easyPromApp.controller:AlunoCtrl
 * @description
 * # AlunoCtrl
 * Controller of the easyPromApp
 */
angular.module('easyPromApp')
.controller('AlunoCtrl', function ($scope) {	  
	$scope.alunos=[
	               {"nome":"Fernanda","email":"fer@yahoo.com","curso":"Fisioterapia"},
	               {"nome":"Gabriela","email":"gabi@gmail.com","curso":"Biologia"},
	               {"nome":"Rodolfo","email":"rodolfo@bol.com.br","curso":"Engenharia"},
	               {"nome":"Elisangela","email":"eli@aol.com","curso":"Marketing"},
	               {"nome":"Vanessa","email":"van@uol.com.br","curso":"Psicologia"}	               	               
	               ];
	
	$(document).ready(function(){
		
	});

});
