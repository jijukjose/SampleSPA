
tidalApp.controller("tidalCtrl", function($scope, searchArtistsService, searchAlbumsService, searchPlayListService) {

    $scope.searchAlbumsVisible = false;

    $scope.albumList=[];

    $scope.mySearch = "";

    $scope.mySearchCallback = function(params){
        $scope.searchAlbumsVisible = false;
        return searchArtistsService(params.query);
    };

    $scope.searchAlbumsOfSelectedArtist = function(){
        $scope.searchAlbumsVisible = true;
        if(angular.isDefined($scope.selectedArtist)){
            searchAlbumsService($scope.selectedArtist).then(function(response){
                $scope.albumList = response;
            });
        }
    };

    $scope.displayPlayList = function(item) {
        searchPlayListService(item.albumId).then(function(response){
            $scope.playList = response;
        });
    };


});

function callback(response, status) {
    alert(response+"_"+status);
}
