'use strict';

/**
 * @ngdoc overview
 * @name easyPromApp
 * @description
 * # easyPromApp
 *
 * Main module of the application.
 */
angular
  .module('easyPromApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
