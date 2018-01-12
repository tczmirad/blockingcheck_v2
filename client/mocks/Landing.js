'use strict';
window.mocks = window.mocks || {};
window.mocks.Landing = window.mocks.Landing || {};
window.mocks.Landing.BlurInput = function ($scope, params, app) {
    if ($scope.data.SerialNumber == 'blocked') {
        $scope.data.Status = 'BLOCKED';
    } else if ($scope.data.SerialNumber == 'pending') {
        $scope.data.Status = 'PENDING';
    } else {
        $scope.data.Status = 'OK';
    }
};