'use strict';

angular.module('ajRoutes',['ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/', {
            template:'<aj-app></aj-app>'
        })
        .otherwise({redirectTo: '/'});
});
