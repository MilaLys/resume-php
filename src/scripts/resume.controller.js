'use strict';

angular
    .module( 'resumeApp' )
    .controller( 'ResumeController',
        [ '$scope', '$anchorScroll', '$http', 'ArticleService', 'MessageService', '$uibModal', 'PortfolioService',
            function ( $scope, $anchorScroll, $http, ArticleService, MessageService, $uibModal, PortfolioService ) {

                var vm = $scope.vm = {
                    scrollTo: function ( id ) {
                        $anchorScroll( id );
                    },
                    limitPortfolio: 6,
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
                    ],
                    name: '',
                    email: '',
                    message: '',
                    sendMsg: function () {
                        MessageService
                            .sendMessage( vm.name, vm.email, vm.message )
                            .then( $scope.open( 'sm' ) )
                            .catch( function ( error ) {
                            } );
                        vm.name = '';
                        vm.email = '';
                        vm.message = '';
                    },
                    currentPage: 0,
                    portfolio: '',
                    portfolioNextPage: getNextPage,
                    portfolioPrevPage: getPrevPage,
                    portfolioPageCount: 0
                };

                PortfolioService.getPortfolio( vm.currentPage, vm );
                PortfolioService.getPortfolioPageCount( vm );
                function getNextPage() {
                    vm.currentPage++;
                    PortfolioService.getPortfolio( vm.currentPage, vm );
                }

                function getPrevPage() {
                    vm.currentPage--;
                    PortfolioService.getPortfolio( vm.currentPage, vm );
                }

                /* Settings for Accordion */
                $scope.oneAtATime = false;
                $scope.status = {
                    isCustomHeaderOpen: false,
                    isFirstOpen: true,
                    isFirstDisabled: false
                };

                /*-----Animation Progress Bars------*/
                var isAnimated = false;

                window.onscroll = function () {
                    if ( isAnimated ) {
                        return;
                    }

                    function showAnimation() {
                        var element = document.getElementById( 'skills' );
                        if ( element !== null ) {
                            var elementTopPosition = getCoords( element );
                            var windowHeight = document.documentElement.clientHeight; // size of window visible part, 657
                            var scroll = window.pageYOffset;
                            var progressBars = document.querySelectorAll( '.progress-bar' );

                            if ( (windowHeight + scroll) > elementTopPosition ) {
                                angular.element( document ).find( progressBars ).addClass( 'animate' );

                                isAnimated = true;
                            }
                        }
                    }
                    function getCoords( elem ) {
                        var box = elem.getBoundingClientRect();
                        var top = box.top + pageYOffset;

                        return top;
                    }
                    showAnimation();
                };

                /*------Modal Window------*/
                $scope.animationsEnabled = true;

                $scope.open = function ( size ) {

                    var modalInstance = $uibModal.open( {
                        animation: $scope.animationsEnabled,
                        templateUrl: 'modal-window.html',
                        size: size
                    } );
                };
                
                $scope.toggleAnimation = function () {
                    $scope.animationsEnabled = !$scope.animationsEnabled;
                };
            } ] );


