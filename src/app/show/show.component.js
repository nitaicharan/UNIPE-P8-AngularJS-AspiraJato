'use strict';

angular.module('ajShow',['resource']).component('ajShow', {
    templateUrl: '/app/show/show.component.html'
    ,controller: ['$scope','$location','$window','resource',function($scope,$location,$window,resource){
        var config = resource('/config/elastic.json','json','application/json').get().$get();
        var params = $location.search();

        onInit();

        $scope.newSearch = function(){
            $location.path('').search('');
        }

        function onInit(){
            if(params){
                var body = before(params);
                config.then(elastic=>{
                    var response = resource('http://'+elastic.url, 'json', 'application/json').save(body).$promise
                    .then(response =>{
                        $scope.gastos = response.hits.hits;
                        $scope.total = response.hits.total.value;
                    }).catch(response =>{
                        console.log(response);
                    });
                });
            }
        }

        function before(params){
            return {
                "query": {"bool": {"must": [{
                    "match": {
                        "nomeParlamentar": params.nome
                    }
                }, {
                    "range": {
                        "dataEmissao": {
                            "gte": params.start
                            ,"lt": params.end
                            ,"format" : "yyyy-MM-dd"
                        }
                    }
                }
                ]}}
            };
        }
    }]
});
