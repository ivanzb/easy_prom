angular.module('easyPromApp')
  .service('$msg', function ($rootScope) {
    	
        this.ok = function (texto) {
        	$rootScope.mensagem_alerta = texto
        	$rootScope.tipo_alerta = 'success';
        };
        
        this.warn = function (texto) {
        	$rootScope.mensagem_alerta = texto
        	$rootScope.tipo_alerta = 'warning';
        };
        
        this.error = function (texto) {
        	$rootScope.mensagem_alerta = texto
        	$rootScope.tipo_alerta = 'danger';
        };       
        
   
    });