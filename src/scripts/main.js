'use strict';

angular
    .module( 'resumeApp',
        [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate',
            'blogModule',
            'articleModule'
        ] )
    
    .config( [ '$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
        
        $urlRouterProvider.otherwise( '/home' );
        $stateProvider
            .state( 'home', {
                url: '/home',
                templateUrl: 'home.html'
            } )
            .state( 'blog', {
                url: '/blog',
                templateUrl: 'blog.html',
                controller: 'blogController'
            } )
            .state( 'article', {
                url: '/article/:id',
                templateUrl: 'single-article.html',
                controller: 'articleController'
            } )
    } ] );



