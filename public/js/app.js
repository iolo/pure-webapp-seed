'use strict';

angular.module('app', ['app.filters', 'app.directives', 'app.services', 'app.controllers'])
  .config(['$routeProvider', function (routes) {

    routes.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
    routes.when('/view1', {templateUrl: 'partials/home.html', controller: 'view1Ctrl'});
    routes.when('/view2', {templateUrl: 'partials/home.html', controller: 'view2Ctrl'});
    routes.when('/view3', {templateUrl: 'partials/home.html', controller: 'view3Ctrl'});

    routes.otherwise({redirectTo: '/home'});
  }])
  .run(['$rootScope', '$location', function (root, loc) {

    root.navActive = function (path) {
      return (path === loc.path()) ? 'active' : '';
    };

  }]);
