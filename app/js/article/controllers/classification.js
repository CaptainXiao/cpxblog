/**
 * 文章分类
 * Created by Captain on 3/16/17.
 */
var classificationController = module.exports = function () {
    return ['$scope', '$http', '$state', '$rootScope', function ($scope, $http, $state, $rootScope) {

        $scope.articleList = [
            {
                id:1,
                name:"SpringCloud",
                num:4
            },
            {
                id:2,
                name:"Java",
                num:12
            },
            {
                id:3,
                name:"Linux",
                num:9
            }
        ];


    }]
};