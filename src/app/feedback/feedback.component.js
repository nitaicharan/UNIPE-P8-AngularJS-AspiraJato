'use strict';

angular.module('ajFeedback',['resource']).component('ajFeedback', {
    templateUrl: '/app/feedback/feedback.component.html'
    ,controller: ['$scope','$location','$window','resource',function($scope,$location,$window,resource){
        var config = resource('/config/luis.json','json','application/json').get().$get();
        var query = $location.search().query;

        onInit();

        $scope.show = ()=>{
            if(query)$location.path('show').search('query',query);
        }

        function onInit(){
            config.then(luis=>{
                if(query){
                    $scope.searchresult = resource(luis.url+query, 'json', 'application/json').get();
                }
            });
        }
    }]
});
