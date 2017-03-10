/**
 * Created by Captain on 3/9/17.
 */
var template = require('html!./left-bar.html');

angular.module('leftBarModule', []).directive('leftBar', function () {
    return {
        scope: true,
        restrict: "E",
        template: template,
        controller: ['$state', '$scope', '$rootScope', '$location', function ($state, $scope, $rootScope,$location) {

            // 初始化导航信息
            $scope.leftNavList = [
                {
                    name:"首页",
                    view : "home"
                },
                {
                    name: "文章",
                    view : "article"
                },
                {
                    name: "管理",
                    view : "manage"
                }
            ];

            // 初始化菜单
            var thisPath = $location.$$path;
            if( thisPath ){
                var absolutePath = thisPath.substr(1);
                for(var index = 0 ; index < $scope.leftNavList.length ; index++){
                    if ( $scope.leftNavList[index].view == absolutePath ){
                        $scope.leftNavList[index]['active'] = true;
                    }
                }
            }

            // 选择导航
            $scope.selectNav = function(event){
                $state.go(event.view,{});
                for(var index = 0 ; index < $scope.leftNavList.length ; index++){
                    $scope.leftNavList[index]['active'] = false;
                }
                event['active'] = true;
            };

        }],

        link: function (scope, elm, attrs) {
            //todo
        }
    };
});
