'use strict';

angular.module('ajSearchbox',[]).component('ajSearchbox', {
    templateUrl: '/app/searchbox/searchbox.component.html'
    ,controller: ['$scope','$location',function($scope,$location){
        var config;

        oninit();

        $scope.goSearch = function (){
            if($scope.search){
                $location.path('feedback').search('query',$scope.search);
            }
        }

        function oninit (){
            $scope.search = "Kim Patroca Kataguiri 2019";
        }
    }]
});
