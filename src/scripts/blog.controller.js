'use strict';

angular
    
    .module( 'blogModule')
    
    .controller( 'blogController',['$scope','ArticleService', function ($scope, ArticleService) {
        var vm = $scope.vm = {
            blog: ArticleService.getAllArticles($scope)
        };
    }]);
