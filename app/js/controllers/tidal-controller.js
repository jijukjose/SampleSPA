"use strict";

/*The main controller function for the application*/

tidalApp.controller("tidalCtrl", function ($scope, searchArtistsService, searchAlbumsService, searchPlayListService) {

    $scope.searchAlbumsVisible = false;
    $scope.playList = [];
    $scope.search = "";
//    $scope.currentArtistSearched = "";


    $scope.searchArtists = function (params) {
        return searchArtistsService(params.query);
    };


    $scope.searchAlbumsOfSelectedArtist = function (item) {
        $scope.searchAlbumsVisible = true;
//        $scope.currentArtistSearched = item.item;
        $scope.selectedArtist = item.item;
//        $scope.mySearch =  item.item;
        $scope.playList = [];
        if (angular.isDefined($scope.selectedArtist)) {
            searchAlbumsService($scope.selectedArtist).then(function (response) {
                $scope.albumList = response;
            });
        }
        return   item.item;
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


