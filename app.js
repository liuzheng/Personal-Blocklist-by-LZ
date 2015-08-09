/**
 * Created by liuzheng on 8/9/15.
 */
'use strict';
var NgApp = angular.module('NgApp', []);
NgApp.controller('PersonalControl', function ($scope) {
$scope.BlockList = JSON.parse(localStorage.getItem('blockLink'));
    $scope.add = function () {
        console.log($scope.BlockList)
        $scope.BlockList.push('')
    };
    $scope.delete = function (target) {
        $scope.BlockList.splice(target, 1);
        localStorage.setItem('blockLink', JSON.stringify($scope.BlockList));
    }
});