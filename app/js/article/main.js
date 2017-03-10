/**
 * Created by Captain on 3/9/17.
 */
var angular = window.angular;

var router = require("./router/router");

var articleModule = angular.module('articleModule', [])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider.state('home', router.home);
            $stateProvider.state('article', router.artcile);
            $stateProvider.state('manage', router.manage);
        }
    ]);
