'use strict';

angular.module('ajApp',[
        'trycomponent'
        ,'trydirective'
        ,'ajRoutes'
        ,'ajSearchbox'
        ,'ajFeedback'
        ,'ajShow'
    ]
).component('ajApp', {
    templateUrl: "/app/app.component.html"
    ,controller: function(){}
});
