'use strict';
angular
    .module( "resumeApp" )
    .factory( 'PortfolioService', [ '$http', function ( $http ) {
        
        return {
            getPortfolio: function ( page, vm ) {
                $http( {
                    method: 'GET',
                    url: 'portfolio.php?page=' + page,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                } ).then( function successCallback( response ) {
                    vm.portfolio = response.data;
                }, function errorCallback( response ) {

                } );
            },
            getPortfolioPageCount: function ( vm ) {
                $http( {
                    method: 'GET',
                    url: 'portfolio-page-count.php',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                } ).then( function successCallback( response ) {
                    vm.portfolioPageCount = response.data.pages;
                }, function errorCallback( response ) {
            
                } );
            }
        }
    } ] );