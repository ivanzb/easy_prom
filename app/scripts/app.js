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
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/proms', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })  
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($authProvider) {

	    $authProvider.facebook({
	      clientId: '624059410963642'
	    });

	    $authProvider.google({
	      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
	    });

	    $authProvider.github({
	      clientId: '0ba2600b1dbdb756688b'
	    });

	    $authProvider.linkedin({
	      clientId: '77cw786yignpzj'
	    });

	    $authProvider.yahoo({
	      clientId: 'dj0yJmk9dkNGM0RTOHpOM0ZsJmQ9WVdrOVlVTm9hVk0wTkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wMA--'
	    });

	    $authProvider.live({
	      clientId: '000000004C12E68D'
	    });

	    $authProvider.twitter({
	      url: '/auth/twitter'
	    });

	    $authProvider.oauth2({
	      name: 'easy_prom',
	      url: '/auth/login',
	      redirectUri: window.location.origin,
	      clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
	    });

	  });
