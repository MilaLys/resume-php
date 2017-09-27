'use strict';

angular
    
    .module( 'articleModule' )
    
    .controller( 'articleController', [ 'ArticleService', '$scope', '$stateParams', function ( ArticleService, $scope, $stateParams ) {
        
        var vm = $scope.vm = {
            article: ArticleService.getArticleById( $scope, $stateParams.id )
        };
    } ] );
