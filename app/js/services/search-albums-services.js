/**
 * Created with IntelliJ IDEA.
 * User: efield
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

tidalApp.factory('searchAlbumsService', function( $http, $q, ArtistNameToIdMapping){

    return function (artistsName) {
        var defer = $q.defer();
        var url = "/artist/" + ArtistNameToIdMapping[artistsName] + "/top?limit=15";
        DZ.api(url, function (response) {
//            console.log(response);
            if (response && response.data && response.data.length > 0) {
                defer.resolve(constructListOfArtistsFromResponse(response.data));
            }
        });
        return defer.promise;
    };

    function constructListOfArtistsFromResponse(data) {
        var artistList = [];
        angular.forEach(data, function (item) {
            artistList.push({artistName: item.artist.name, title: item.album.title, cover: item.album.cover, link: item.link});
        });
//        console.log(artistList);
        return artistList;
    }

});

