/**
 * Created by Captain on 3/16/17.
 */
var angular = window.angular;

var router = require("./router/router");

var normalModule = angular.module('normalModule', [])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider.state('not_found', router.not_found);
        }
    ]);
