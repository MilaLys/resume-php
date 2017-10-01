'use strict';

angular
    
    .module( 'articleModule' )
    
    .controller( 'articleController', [ 'ArticleService', '$scope', '$stateParams', '$sce', function ( ArticleService, $scope, $stateParams, $sce ) {
        var vm = $scope.vm = {
            article: ArticleService.getArticleById( $scope, $stateParams.id ),
            trustArticle: function () {
                if (typeof(vm.article)!= 'undefined' ){
                    return $sce.trustAsHtml(vm.article.text);
                }
                return '';
            }
        }
    } ] );
