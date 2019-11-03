'use strict';

angular.module('ajSearch',[]).component('ajSearch', {
    templateUrl: '/app/search/search.component.html'
    ,controller: ['$scope','$location',function($scope,$location){
        var config;
        $scope.search = $location.search().query;

        oninit();

        $scope.goSearch = function (){
            if($scope.search){
                $location.path('feedback').search('query',$scope.search);
            }
        }

        $scope.clear = function(){
            $scope.search = '';
            $location.path('').search('');
        }

        function oninit (){
            if(!$scope.search)$scope.search = "Kim Patroca Kataguiri 2019";
        }
    }]
});
