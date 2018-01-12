angular.module('app').controller('app_landing', app_landing);
function app_landing($scope, app, $timeout) {
    'use strict';
    app.init($scope);
    $scope.search = function (){
        $timeout(function() { app.action('Landing', 'Submit', this);}, 100);
        //app.action('Landing', 'Submit', this);
        //app.hideLoading();
    };
    $scope.reset = function () {
        $scope.data = {};
    };
    $scope.scan = function () {
        cordova.plugins.barcodeScanner.scan(function (result) {
            setTimeout(function () {
                //$scope.data.format = result.format;
                $scope.data.text = result.text;
                $scope.$digest();
            }, 0);
        }, function (error) {
        }, {
            'preferFrontCamera': false,
            'showFlipCameraButton': true,
            'showTorchButton': true,
            'orientation': 'landscape'
        });
    };
}