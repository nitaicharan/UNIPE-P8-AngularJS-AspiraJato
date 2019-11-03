'use strict';

angular.module('ajFeedback',['resource']).component('ajFeedback', {
    templateUrl: '/app/feedback/feedback.component.html'
    ,controller: ['$scope','$location','$window','resource',function($scope,$location,$window,resource){
        var config = resource('/config/luis.json','json','application/json').get().$get();
        var query = $location.search().query;

        onInit();

        $scope.show = ()=>{
            if(query){
                var params = {};
                $scope.searchresult.entities.forEach(entity =>{
                    if(entity.type.toLowerCase().includes('datetimev2')){
                        entity.resolution.values.forEach(time =>{
                            params.end = time.end;
                            params.start = time.start;
                        })
                    }else if(entity.type.toLowerCase().includes('deputadx')){
                        entity.resolution.values.forEach(entity =>{
                            params.nome = entity;
                        })
                    }
                });
                $location.path('show').search(params);
            }
        }

        $scope.redo = function(){
            if(query)$location.path('').search('query',query);
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
