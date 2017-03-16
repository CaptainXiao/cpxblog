/**
 * Created by Captain on 3/9/17.
 */
var articleController = module.exports = function () {
    return ['$scope', '$http', '$state', '$rootScope', function ($scope, $http, $state, $rootScope) {

        var id = $state.params.id;
        console.log("id:" + id);

        $scope.model = {
            "title" : "《Spring Cloud与Docker微服务架构实战》配套代码"
        };

        console.log($scope.model);

    }]
};