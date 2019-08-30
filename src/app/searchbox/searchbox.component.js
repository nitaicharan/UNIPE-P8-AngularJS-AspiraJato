'use strict';

angular.module('ajSearchpage',[])
    .component('ajSearchpage', {
        templateUrl: '/app/searchbox/searchbox.component.html',
        controller: ['$scope',function($scope){
            console.log($scope.search);
            oninit();
            function oninit (){
                $scope.search = '';
            }
        }]
});
