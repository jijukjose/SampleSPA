
tidalApp.controller("tidalCtrl", function($scope, searchArtistsService, searchAlbumsService, searchPlayListService) {

    $scope.searchAlbumsVisible = false;
    $scope.playList=[];
    $scope.mySearch = "";
    $scope.currentArtistSearched="";


    $scope.mySearchCallback = function(params){
        return searchArtistsService(params.query);
    };

    $scope.searchAlbumsOfSelectedArtist = function(){
        $scope.searchAlbumsVisible = true;
        $scope.currentArtistSearched = $scope.selectedArtist;
        $scope.playList=[];
        if(angular.isDefined($scope.selectedArtist)){
            searchAlbumsService($scope.selectedArtist).then(function(response){
                $scope.albumList = response;
            });
        }
    };

    $scope.displayPlayList = function(item) {
        searchPlayListService(item).then(function(response){
            $scope.playList = response;
        });
    };


});

function callback(response, status) {
    alert(response+"_"+status);
}
