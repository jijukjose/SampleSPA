/**
 * Created with IntelliJ IDEA.
 * User: efield
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

tidalApp.factory('searchPlayListService', function ($http, $q) {
    return function (albumId) {
        var defer = $q.defer();
        /*TODO: move this to a constant service or filter ...*/
        https://api.deezer.com/album/1130967/tracks
        var url = "/album/"+albumId+"/tracks";
        DZ.api(url, function (response) {
            if (response && response.data && response.data.length > 0) {
                fillReleasedDate(constructListOfArtistsFromResponse(response.data)).then(function(response){
                    $q.resolve(response);
                });
            }
        });
        return defer.promise;
    };

    function fillReleasedDate() {
        var defer = $q.defer();
        var url = "/album/"+albumId;
        DZ.api(url, function (response) {
            if (response && response.data && response.data.length > 0) {
                defer.resolve(constructListOfArtistsFromResponse(response.data));
            }
        });
        return defer.promise;
    }

    function constructListOfArtistsFromResponse(data) {
        var playList = {data:[], release_date:null};
        angular.forEach(data, function (item) {
            playList.data.push({title: 1, artist: 2, time: 3, released: null, image: 5 });
        });
        return playList;
    }
});

