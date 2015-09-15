
tidalApp.controller("tidalCtrl", function($scope, searchArtistsService, searchAlbumsService) {
    $scope.albumList=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}];

    $scope.mySearch = "";

    $scope.mySearchCallback = function(params){
        return searchArtistsService(params.query);
    };
//    $scope.selected=function(a,b){
//        if(angular.isDefined(a) || angular.isDefined(b)){
//            alert(a+"_"+b);
//        }
//    }
    $scope.$watch('selectedArtist',function(selectedArtist){


    });

    $scope.searchAlbumsOfSelectedArtist = function(){
        if(angular.isDefined($scope.selectedArtist)){
            alert("Searching albums for "+ $scope.selectedArtist);
            searchAlbumsService($scope.selectedArtist);

        }
    };
});

function callback(response, status) {
    alert(response+"_"+status);
}
