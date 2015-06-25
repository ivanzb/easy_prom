'use strict';
angular.module('easyPromApp')
    .service('rest', ['$http', function ($http) {
    	var host = 'http://localhost:7878';
        var urlAlunos = '/alunos';

        this.getAlunos = function () {
            return $http.get(host+urlAlunos);
        };
   
    }]);