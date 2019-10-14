'use strict';

angular.module('ajRoutes',['ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/feedback',{
            template:'<aj-feedback></aj-feedback>'
        })
        .when('/', {
            template:'<aj-app></aj-app>'
        })
        .otherwise({redirectTo: '/'});
});
