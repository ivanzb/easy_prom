'use strict';
angular.module('easyPromApp')
    .service('$rest', ['$http', function ($http) {
    	var host = 'http://localhost:8080/easy_rest';
        var urlAlunos = '/alunos';
        var urlLogin = '/auth/login';

        this.getAlunos = function () {
            return $http.get(host+urlAlunos);
        };
        
        this.login = function (login,senha) {
            return $http.post(host+urlLogin,{"login":login,"senha":senha},[]);
        };
   
    }]);