(function(){
'use strict';
angular.module('LunchCheck',[]).
//controller("LunchCheckController",function($scope){
//  $scope.name="check";
//});
controller("LunchCheckController",LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){

$scope.checkIfToomuch= function(){
  if($scope.menu == null){
    $scope.myObj= {
      "color":"red"
    };
    $scope.myBroderObj= {
      "border-color":"red"
    };
    $scope.message= "Please enter data first";
    return;
  }
  var str = ($scope.menu).split(',');
  var listString=[""];
  var i;
  for(i= 0; i<str.length; i++){
    if(str[i].trim()!=""){
      listString[i]=str[i];
    }
  }
  if (listString.length > 3){
    $scope.myObj= {
      "color":"green"
    };
    $scope.myBroderObj= {
      "border-color":"green"
    };
    $scope.message= "Too Much";
  } else {
    $scope.myObj= {
      "color":"green"
    };
    $scope.myBroderObj= {
      "border-color":"green"
    };
    $scope.message= "Enjoy";
  }

};

};
})();