/**
 * 顶部
 * Created by Captain on 3/9/17.
 */
var template = require('html!./top-bar.html');

angular.module('topBarModule', []).directive('topBar', function () {
    return {
        scope: true,
        restrict: "E",
        template: template,
        controller: ['$scope', '$http', '$rootScope', '$state', '$timeout', function ($scope, $http, $rootScope, $state, $timeout) {
            console.log("Init Top Bar")
        }],

        link: function (scope, elm, attrs) {
            //todo
        }
    };
});
