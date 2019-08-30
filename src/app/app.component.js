'use strict';

angular.module('app',[
    'trycomponent'
    ,'trydirective'
    ,'searchbox'
]).directive('app', [function(){
    return {    
        restrict: "E",
        templateUrl: "/app/app.component.html",
    }}]);
