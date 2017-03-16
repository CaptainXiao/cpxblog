/**
 * Created by Captain on 3/9/17.
 */
var $ = require('jquery');

var homeController = module.exports = function () {
    return ['$scope', '$http', '$state', '$rootScope', function ($scope, $http, $state, $rootScope) {
        $scope.hasMore = true;

        $scope.list = [
            {
                title : "《Spring Cloud与Docker微服务架构实战》配套代码",
                id : 1,
                classifyId : 1,
                classifyName : "SpringCloud",
                publishTime : "2017-01-23",
                commentNum : 3,
                summary : "Spring Cloud默认为Zuul编写并启用了一些过滤器，这些过滤器有什么作用呢？我们不妨按照@EnableZuulServer、@EnableZuulProxy两个注解进行展开，相信大家对这两个注解都不陌生（至少都见过吧）。如果觉得陌生也没有关系，可将@EnableZuulProxy简单理解为@EnableZuulServer的增强版。事实上，当Zuul与Eureka、Ribbon等组件配合使用时，@EnableZuulProxy是我们常用的注解"
            },
            {
                title : "《Spring Cloud与Docker微服务架构实战》配套代码",
                id : 2,
                classifyId : 1,
                classifyName : "SpringCloud",
                publishTime : "2017-01-23",
                commentNum : 13,
                summary : "Spring Cloud默认为Zuul编写并启用了一些过滤器，这些过滤器有什么作用呢？我们不妨按照@EnableZuulServer、@EnableZuulProxy两个注解进行展开，相信大家对这两个注解都不陌生（至少都见过吧）。如果觉得陌生也没有关系，可将@EnableZuulProxy简单理解为@EnableZuulServer的增强版。事实上，当Zuul与Eureka、Ribbon等组件配合使用时，@EnableZuulProxy是我们常用的注解"
            },
            {
                title : "《Spring Cloud与Docker微服务架构实战》配套代码",
                id : 3,
                classifyId : 1,
                classifyName : "SpringCloud",
                publishTime : "2017-01-23",
                commentNum : 19,
                summary : "Spring Cloud默认为Zuul编写并启用了一些过滤器，这些过滤器有什么作用呢？我们不妨按照@EnableZuulServer、@EnableZuulProxy两个注解进行展开，相信大家对这两个注解都不陌生（至少都见过吧）。如果觉得陌生也没有关系，可将@EnableZuulProxy简单理解为@EnableZuulServer的增强版。事实上，当Zuul与Eureka、Ribbon等组件配合使用时，@EnableZuulProxy是我们常用的注解"
            }
        ]
    }]
};