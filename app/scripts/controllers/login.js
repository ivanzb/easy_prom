angular.module('easyPromApp')
  .controller('LoginCtrl', function($scope, $rest,$msg) {

    $scope.authenticate = function(login,senha) {
      $rest.login(login,senha).success(function(data){
    	  console.log(data);    	  
      }).error(function(data){
    	  console.log(data);
    	  $msg.error(data);
      });
    };

  });