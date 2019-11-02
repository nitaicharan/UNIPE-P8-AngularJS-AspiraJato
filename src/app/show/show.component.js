'use strict';

angular.module('ajShow',['resource']).component('ajShow', {
    templateUrl: '/app/show/show.component.html'
    ,controller: ['$scope','$location','$window','resource',function($scope,$location,$window,resource){
        var config = resource('/config/elastic.json','json','application/json').get().$get();
        var query = $location.search().query;

        onInit();

        $scope.newSearch = function(){
            $location.path('').search('query', '');
        }

        function onInit(){
            config.then(luis=>{
                if(query){
                    resource('http://'+luis.url+query, 'json', 'application/json').get().$get().then(response =>{
                        $scope.results = response.hits.hits
                        console.log($scope.results);
                    });
                }
            });
        }
    }]
});
