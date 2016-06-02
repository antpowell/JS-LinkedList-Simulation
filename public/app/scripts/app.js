'use strict';

angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html',
            controller: 'LinkController',
            controllerAs: 'link'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}])