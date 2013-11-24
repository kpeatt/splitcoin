'use strict';

var splitcoin = angular.module('splitcoin.controllers', []);

/* Controllers */

splitcoin.controller('SplitCalc', function($scope, Ticker) {
    function precise_round(num,decimals) {
        return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
    }

    $scope.ticker = Ticker.query();

    $scope.selectedCurrency = "CAD";
    $scope.result = '';
    $scope.tipType = 'percent';
    $scope.tip;
    $scope.billTotal;

    $scope.bitCalc = function(total, tip, tipType, currency) {
        var btcTotal;

        if (!tip) {
            tip = 0;
        }

        total = Number(total);
        tip = Number(tip);

        if (tipType == 'percent') {
            tip = total * (tip/100);
        }

        total = total + tip;

        $scope.billTotal = total;
        btcTotal = total / $scope.ticker[currency].last;
        $scope.result = precise_round(btcTotal, 8);
    }
});