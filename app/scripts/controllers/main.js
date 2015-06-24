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
      {"nome":'Cadastro',"pagina":"alunos.html"},
      {"nome":'Alunos',"pagina":"/views/alunos.html"},
      {"nome":'Comissão',"pagina":"alunos.html"},
      {"nome":'Turmas',"pagina":"alunos.html"},
      {"nome":'Caixa',"pagina":"alunos.html"},
      {"nome":'Promoções',"pagina":"alunos.html"}      
    ];
    $scope.gotoPage = '';   
    
    $scope.vaiPara = function(item){
    	$scope.menuSelecionado=item.nome;
    	$scope.gotoPage = item.pagina;
    };
   
    
    $(document).ready(function(){
    	
    });
    
  });
