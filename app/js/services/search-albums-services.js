/**
 * Created with IntelliJ IDEA.
 * User: efield
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

tidalApp.factory('searchAlbumsService', function( $http, $q, $filter, ArtistNameToIdMapping){


    return function (artistsName) {
        var defer = $q.defer();
        var url = "/artist/" + ArtistNameToIdMapping[artistsName] + "/top?limit=15";
        DZ.api(url, function (response) {
            if (response && response.data && response.data.length > 0) {
                defer.resolve(constructListOfArtistsFromResponse(response.data));
            }
        });
        return defer.promise;
    };

    function constructListOfArtistsFromResponse(data) {
        var albumsList = [];

        angular.forEach(data, function (item) {
            albumsList.push({artistName: item.artist.name, title: item.album.title, cover: item.album.cover, link: item.link,
            albumId:item.album.id});
        });
        albumsList = $filter('unique')(albumsList,"title");
        /*TODO move this to the filter*/

        return albumsList;
    }

});

