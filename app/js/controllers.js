'use strict';

var splitcoin = angular.module('splitcoin.controllers', []);

/* Controllers */

splitcoin.controller('SplitCalc', function($scope, Ticker) {
    $scope.ticker = Ticker.query();

    $scope.selectedCurrency = "CAD";
});