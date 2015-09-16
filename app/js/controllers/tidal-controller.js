
tidalApp.controller("tidalCtrl", function($scope, $rootScope, searchArtistsService, searchAlbumsService) {
    $scope.searchAlbumsVisible = false;
    $scope.albumList=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}];

    $scope.mySearch = "";

    $scope.mySearchCallback = function(params){
        $scope.searchAlbumsVisible = false;
        return searchArtistsService(params.query);
    };
//    $scope.selected=function(a,b){
//        if(angular.isDefined(a) || angular.isDefined(b)){
//            alert(a+"_"+b);
//        }
//    }
//    $scope.$watch('selectedArtist',function(selectedArtist){
//
//
//    });

    $scope.searchAlbumsOfSelectedArtist = function(){
        $scope.searchAlbumsVisible = true;
        if(angular.isDefined($scope.selectedArtist)){
            /*Jiju>> Since a $q service is used in searchAlbumsService, it could be directly binded to
            * scope variable albumList
            * */
            searchAlbumsService($scope.selectedArtist).then(function(response){
                $scope.albumList = response;
                $scope.$apply();
            });

        }
    };

//    $scope.displaySearchResultEnabled = function(){
//        return $scope.searchAlbumsVisible === true;
//    };
});

function callback(response, status) {
    alert(response+"_"+status);
}
