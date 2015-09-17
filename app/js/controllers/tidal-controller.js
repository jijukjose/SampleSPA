"use strict";

/*The main controller function for the application*/

tidalApp.controller("tidalCtrl", function ($scope, searchArtistsService, searchAlbumsService, searchPlayListService) {

    $scope.searchAlbumsVisible = false;
    $scope.playList = [];
    $scope.mySearch = "";
    $scope.currentArtistSearched = "";


    $scope.searchArtists = function (params) {
        return searchArtistsService(params.query);
    };


    $scope.searchAlbumsOfSelectedArtist = function () {
        $scope.searchAlbumsVisible = true;
        $scope.currentArtistSearched = $scope.selectedArtist;
        $scope.playList = [];
        if (angular.isDefined($scope.selectedArtist)) {
            searchAlbumsService($scope.selectedArtist).then(function (response) {
                $scope.albumList = response;
            });
        }
    };

    $scope.displayPlayList = function (item) {
        $scope.albumSelected = item.id;
        $scope.titleSelected = item.title;
        searchPlayListService(item).then(function (response) {
            $scope.playList = response;
        });
    };

    $scope.shouldDisplayAlbumName = function (item, hover) {
        return (hover || $scope.albumSelected === item.id);
    };

});


