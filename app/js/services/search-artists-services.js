/**
 * Created with IntelliJ IDEA.
 * User: efield
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

tidalApp.factory('searchArtistsService', function ($http, $q, ArtistNameToIdMapping) {

    return function (artistsName) {
        var defer = $q.defer();
        var url = "/search?q=artist:" + artistsName;
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
        angular.forEach(data,function(item){
            artistList.push(item.artist.name);
            ArtistNameToIdMapping[item.artist.name] = item.artist.id;
        });
//        console.log(artistList);
        return artistList;
    }
});

