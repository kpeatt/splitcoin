'use strict';

/* Services */

var splitcoinServices = angular.module('splitcoin.services', ['ngResource']);

// Demonstrate how to register services
// In this case it is a simple value service.
splitcoinServices.factory('Ticker', ['$resource',
    function($resource){
        // For real data use: http://blockchain.info/ticker
        return $resource('/sampledata/ticker.json', {}, {
            query: {method:'GET'}
        });
    }
]);