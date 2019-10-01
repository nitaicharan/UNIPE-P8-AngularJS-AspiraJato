'use strict';

angular.module('ajSearchbox',['resource']).component('ajSearchbox', {
    templateUrl: '/app/searchbox/searchbox.component.html'
    ,controller: ['$scope','resource',function($scope,resource){
        var config;

        oninit();

        $scope.spend = function (){
            if($scope.search){
                $scope.rs = resource( config.url+$scope.search, 'json', 'application/json').get();
            }
        }

        function oninit (){
            config = resource( '/config/luis.json', 'json', 'application/json').get();
            $scope.search = "Apagar luz cozinha e sala";
        }
    }]
});
