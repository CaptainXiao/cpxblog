/**
 * Created by Captain on 3/9/17.
 */
window.jQuery = window.$ = require('jquery');
window.moment = require('moment');
require('angular');
require('angular-ui-bootstrap');
require('angular-animate');
require('angular-ui-router');

var angular = window.angular;

require('./common/nav-bar/top-bar');
require('./common/nav-bar/left-bar');
require('./article/main');

angular.module('cpxblog', ['ui.router','ui.bootstrap', 'ngAnimate' , 'topBarModule' ,'leftBarModule', 'articleModule'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

            console.log($urlRouterProvider);

            $urlRouterProvider.otherwise('');
            $httpProvider.interceptors.push('sessionRecoverer');

            // 处理URL带#号问题，设置 html5Mode 并在 index.html <head> 标签内设置 <base href="/">
            $locationProvider.html5Mode(true);
        }
    ])
    .run(['$rootScope', '$http' , '$state', function ($rootScope, $http , $state) {
    }])
    .factory('sessionRecoverer', ['$q', '$injector', '$rootScope', function ($q, $injector, $rootScope) {
        return {

        };
    }]);

angular.bootstrap(document, ['cpxblog']);
