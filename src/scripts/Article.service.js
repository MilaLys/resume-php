'use strict';
angular
    .module( "resumeApp")
    .factory( 'ArticleService',['$http', function ( $http ) {

        return {
            getAllArticles: function (scope) {
                $http( {
                    method: 'GET',
                    url: 'blog.php',
                    async: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                } ).then( function successCallback( response ) {
                    scope.vm.blog = response.data;
                    
                }, function errorCallback( response ) {
                    
                } );
            },
            getLastArticles: function (scope) {
                $http( {
                    method: 'GET',
                    url: 'articles.php',
                    async: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                } ).then( function successCallback( response ) {
                    scope.vm.articles = response.data;
                    
                }, function errorCallback( response ) {
                    
                } );
            },
            getArticleById: function ( scope, id ) {
                $http( {
                    method: 'GET',
                    url: 'article.php?id='+id,
                    async: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                } ).then( function successCallback( response ) {
                    scope.vm.article = response.data;
                    
                }, function errorCallback( response ) {
                    
                } );
            }
        }
    }]);