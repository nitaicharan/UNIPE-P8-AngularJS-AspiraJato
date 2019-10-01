'use strict';

angular.module('ajApp',[
        'trycomponent'
        ,'trydirective'
        ,'ajRoutes'
        ,'ajSearchbox'
    ]
).component('ajApp', {
    templateUrl: "/app/app.component.html"
    ,controller: function(){}
});
