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
            $urlRouterProvider.otherwise('');
            $httpProvider.interceptors.push('sessionRecoverer');
        }
    ])
    .run(['$rootScope', '$http' , '$state', function ($rootScope, $http , $state) {
    }])
    .factory('sessionRecoverer', ['$q', '$injector', '$rootScope', function ($q, $injector, $rootScope) {
        return {

        };
    }]);

angular.bootstrap(document, ['cpxblog']);
