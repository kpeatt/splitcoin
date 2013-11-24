'use strict';

var splitcoin = angular.module('splitcoin.controllers', []);

/* Controllers */

splitcoin.controller('SplitCalc', function($scope, Ticker) {

    $scope.ticker = Ticker.query();

    // $scope.currencies = function() {
    //     angular.forEach($scope.ticker, function(value, key) {
    //         /* do something for all key: value pairs */
    //     });
    // }

});