var app = angular.module("app", ["ngMaterial"]);

app.factory("menu", ['$rootScope', function ($rootScope) {
  var self;
  var filters = [{ filter: 'All', color: '#000' }, 
                 { filter: 'Vote', color: '#a48623' },
                 { filter: 'Running', color: '#458B74' },
                 { filter: 'Unstarted', color: '#D2D6DF' },
                 { filter: 'Completed', color: '#40505E' }];

  return self = {
    filters: filters,

    selectFilter: function(filter) {
      self.currentFilter = filter;
      if (filter.filter === "All") {
        $rootScope.pollFilter = undefined;
      } else if (filter.filter === "Running") {
        $rootScope.pollFilter = "started";
      } else if (filter.filter === "Completed") {
        $rootScope.pollFilter = "stopped";
      } else {
        $rootScope.pollFilter = filter.filter.toLowerCase();
      };
    },

    isFilterSelected: function (filter) {
      return self.currentFilter === filter;
    }
  };
}]);

app.controller("appCtrl",function ($scope, $materialSidenav, menu){

  $scope.menu = menu;
  $scope.role = Cambrian.capi.roles.list()[0];

  $scope.toggleMenu = function () {
    $materialSidenav('left').toggle();
  };

});