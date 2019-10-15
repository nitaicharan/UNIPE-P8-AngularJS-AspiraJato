'use strict';

angular.module('resource',['ngResource']).factory('resource', ['$resource',function($resource){
    return function(url, dt, ct){
        return $resource(
            url
            ,{}
            ,{
                update: { method: 'PUT' }
                ,get: {
                    method: 'GET'
                    ,dataType: dt
                    ,contentType: ct
                }
            });
    }
}]);
