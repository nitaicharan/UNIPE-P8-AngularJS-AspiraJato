'use strict';

angular.module('ajSearch',[]).component('ajSearch', {
    templateUrl: '/app/search/search.component.html'
    ,controller: ['$scope','$location',function($scope,$location){
        var config;

        oninit();

        $scope.goSearch = function (){
            if($scope.search){
                $location.path('feedback').search('query',$scope.search);
            }
        }

        $scope.clear = function(){
            $scope.search = '';
        }

        function oninit (){
            $scope.search = "Kim Patroca Kataguiri 2019";
        }
    }]
});
