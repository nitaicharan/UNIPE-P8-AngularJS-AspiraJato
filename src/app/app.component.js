'use strict';

angular.module('ajApp',[
    'trycomponent'
    ,'trydirective'
    ,'ajSearchpage'
]).directive('ajApp', [function(){
    return {    
        restrict: "E",
        templateUrl: "/app/app.component.html",
    }}]);
