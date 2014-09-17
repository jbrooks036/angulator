(function(){
  'use strict';

  angular.module('angulator', [])
  .controller('MainController', ['$scope', function($scope){ // '$scope' is to save through minification
    $scope.display = '0';

    $scope.answer = function(){
      var num1 = $scope.display *1,
          num2 = $scope.memory *1,
          result = 0;

      switch($scope.operator){
        case('+'):
          result = num1 + num2;
          break;
        case('-'):
          result = num2 - num1;
          break;
        case('*'):
          result = num1 * num2;
          break;
        case('/'):
          result = num2 / num1;
          break;
      }
      $scope.display = result;
      $scope.operator = $scope.memory = '';
    };

    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };

    $scope.clearDisplay = function(){
      $scope.display = '0';
    };

    $scope.addDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}

      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

  }]);

})();

