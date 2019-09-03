'use strict';

angular.module('resource',['ngResource']).factory('resource', ['$resource', function($resource) {
    return function(params){
        return $resource(
            'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/7725253a-03d1-448a-be64-88f8c6e22571?verbose=true&timezoneOffset=-360&subscription-key=7d729527d57c4ea39c3ec8a5ef3c7b48&q='+params
            ,{}
            ,{
                update: { method: 'PUT' }
                ,get: { method: 'GET' }
            });
    }
}]);
