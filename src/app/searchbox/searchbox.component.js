'use strict';

angular.module('ajSearchpage',['resource']).component('ajSearchpage', {
    templateUrl: '/app/searchbox/searchbox.component.html',
    controller: ['$scope','resource',function($scope,resource){
        oninit();

        $scope.spend = function (){
            if($scope.search){
                $scope.rs = resource($scope.search).get();
            }
        }

        function oninit (){
            $scope.search = "Apagar luz sala e cozinha";
        }
    }]
});
