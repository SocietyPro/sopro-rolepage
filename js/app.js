var app = angular.module("app", []);

app.controller("appCtrl",function ($scope){
  $scope.role = Cambrian.capi.roles.list()[0];
});