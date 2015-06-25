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
    $scope.menu = [
      {"nome":'Cadastro',"pagina":"alunos.html","icone":"glyphicon-file"},
      {"nome":'Alunos',"pagina":"/views/alunos.html","icone":"glyphicon-user"},
      {"nome":'Comissão',"pagina":"alunos.html","icone":"glyphicon-euro"},
      {"nome":'Turmas',"pagina":"alunos.html","icone":"glyphicon-education"},
      {"nome":'Caixa',"pagina":"alunos.html","icone":"glyphicon-piggy-bank"},
      {"nome":'Promoções',"pagina":"alunos.html","icone":"glyphicon-plane"}      
    ];
    $scope.gotoPage = '';   
    
    $scope.vaiPara = function(item){
    	$scope.menuSelecionado=item.nome;
    	$scope.gotoPage = item.pagina;
    };
   
    
    $(document).ready(function(){
    	
    });
    
  });
