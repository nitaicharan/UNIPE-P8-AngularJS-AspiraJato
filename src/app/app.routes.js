'use strict';

angular.module('ajRoutes',['ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/feedback',{
            template:'<aj-feedback></aj-feedback>'
        })
        .when('/show',{
            template:'<aj-show></aj-show>'
        })
        .when('/trycomponent',{
            template:'<trycomponent></trycomponent>'
        })
        .when('/', {
            template:'<aj-app></aj-app>'
        })
        .otherwise({redirectTo: '/'});
});
