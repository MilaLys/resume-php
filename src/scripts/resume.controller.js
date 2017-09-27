'use strict';

angular
    .module( 'resumeApp' )
    .controller( 'ResumeController', [ '$scope', '$anchorScroll', '$http', 'ArticleService', function ( $scope, $anchorScroll, $http, ArticleService ) {
        
        var vm = $scope.vm = {
            scrollTo: function ( id ) {
                $anchorScroll( id );
            },
            limitPortfolio: 6,
            portfolio: [ {
                banner: '',
                title: '',
                url: '',
                technologies: '',
                description: 'Description of the project.'
            } ],
            articles: ArticleService.getLastArticles( $scope ),
            skills: [
                {
                    title: 'HTML',
                    icon: 'fa-html5',
                    content: [ 'XHTML', 'HTML5' ]
                },
                {
                    title: 'CSS3',
                    icon: 'fa-css3',
                    content: [ 'LESS', 'SASS', 'SCSS' ]
                },
                {
                    title: 'JavaScript',
                    icon: 'fa-desktop',
                    content: [ 'ES5', 'ES6' ]
                },
                {
                    title: 'Libraries',
                    icon: 'fa-book',
                    content: [ 'Bootstrap 3', 'Materialize', 'UI Bootstrap', 'jQuery', 'jQueryUI' ]
                },
                {
                    title: 'Frameworks',
                    icon: 'fa-code',
                    content: [ 'AngularJS 1.*', 'Angular 4.*' ]
                },
                {
                    title: 'Apps & Tools',
                    icon: 'fa-cogs',
                    content: [
                        'VCS - SVN, GIT',
                        'Adobe Photoshop, Adobe Illustartor, Avocode',
                        'Netbeans, phpStorm',
                        'Gulp, Bower, Yeoman, npm',
                        'Bitbucket, Atlassian Jira'
                    ]
                },
                {
                    title: 'Languages',
                    icon: 'fa-globe',
                    content: [ 'English - Intermediate', 'Ukrainian, Russian - Native' ]
                }
            ]
        };
        
        $http( {
            method: 'GET',
            url: 'portfolio.php',
            async: true,
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then( function successCallback( response ) {
            vm.portfolio = response.data;
            
        }, function errorCallback( response ) {
            
        } );
        
        
        /* Settings for Accordion */
        $scope.oneAtATime = false;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    } ] );