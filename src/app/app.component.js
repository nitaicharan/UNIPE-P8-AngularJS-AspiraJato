'use strict';

angular.module("ajApp").
  directive('ajApp', [function(){
    return {    
        restrict: "E",
        templateUrl: "/app/app.component.html",
    }
}]);

