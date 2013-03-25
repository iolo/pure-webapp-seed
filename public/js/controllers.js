'use strict';

angular.module('app.controllers', [])
  .controller('homeCtrl', ['$scope', function (scope) {

    scope.message = 'welcome to pure-webapp-seed';

  }])
  .controller('view1Ctrl', ['$scope', function (scope) {

    scope.message = 'this is view1';

  }])
  .controller('view2Ctrl', ['$scope', function (scope) {

    scope.message = 'this is view2';

  }])
  .controller('view3Ctrl', ['$scope', function (scope) {

    scope.message = 'this is view3';

  }]);

