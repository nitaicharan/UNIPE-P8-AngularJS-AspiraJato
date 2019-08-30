'use strict';

angular.module("trydirective",[])
    .directive('trydirective', [function(){
        return {    
            restrict: "E",
            templateUrl: "/app/trydirective/trydirective.component.html",
        }
    }]);
