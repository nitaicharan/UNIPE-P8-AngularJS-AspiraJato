'use strict';

angular.module('resource',['ngResource']).factory('resource', ['$resource',function($resource){
    return function(url, dt, ct, params = undefined){
        return $resource(
            url
            ,{}
            ,{
                save: {
                    method: 'POST'
                    ,dataType: dt
                    ,contentType: ct
                    ,params: params
                }
                ,get: {
                    method: 'GET'
                    ,dataType: dt
                    ,contentType: ct
                    ,params: params
                }
            });
    }
}]);
