'use strict';

angular.module('ajApp',[
        'trycomponent'
        ,'trydirective'
        ,'ajRoutes'
        ,'ajSearch'
        ,'ajFeedback'
        ,'ajShow'
    ]
).component('ajApp', {
    templateUrl: "/app/app.component.html"
    ,controller: function(){}
});
