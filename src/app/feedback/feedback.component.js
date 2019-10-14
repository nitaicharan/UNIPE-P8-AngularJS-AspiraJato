'use strict';

angular.module('ajFeedback',['resource']).component('ajFeedback', {
    templateUrl: '/app/feedback/feedback.component.html'
    ,controller: ['$scope','$location','resource',function($scope,$location,resource){
        var luis; 

        onInit();

        $scope.goGet = function(){
            //console.log($scope.searchresult);
        }
        
        function onInit(){
            var query = $location.search().query; 
            var luissets = resource('/config/luis.json','json','application/json').get().$get();
            var elasticsets = resource('/config/elastic.json','json','application/json').get().$get();
            luissets.then(luis=>{
                if(query){
                    $scope.searchresult = resource(luis.url+query, 'json', 'application/json').get();
                    //console.log($scope.searchresult);
                }
            });
        }
    }]
});
