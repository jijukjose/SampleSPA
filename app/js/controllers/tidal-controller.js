
tidalApp.controller("tidalCtrl", function($scope, $http, $q, $window) {
    $scope.albumList=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}];

    $scope.mySearch = "";

    $scope.mySearchCallback = function(params) {
        var defer = $q.defer();

        $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&q=" + params.query)
            .success(function(response) {
                defer.resolve(response);
            });

        return defer.promise;
    };
});

function callback(response, status) {
    console.log(status);
};
