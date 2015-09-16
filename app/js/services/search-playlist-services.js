/**
 * Created with IntelliJ IDEA.
 * User: efield
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

tidalApp.factory('searchPlayListService', function ($http, $q) {
    var albumSelected;
    var id = 0;
    return function (album) {

        var defer = $q.defer();
        albumSelected = album;
        id = 0;
        /*TODO: move this to a constant service or filter ...*/
        https://api.deezer.com/album/1130967/tracks
        var url = "/album/"+albumSelected.albumId+"/tracks";
        DZ.api(url, function (response) {
            if (response && response.data && response.data.length > 0) {
                fillReleasedDate(constructListOfArtistsFromResponse(response.data)).then(function(response){
                    defer.resolve(response);
                });
            }
        });
        return defer.promise;
    };

    function fillReleasedDate(playList) {
        var defer = $q.defer();
        var url = "/album/"+albumSelected.albumId;
        DZ.api(url, function (response) {
            if (response && response.release_date) {
                playList.release_date = response.release_date;
            }
            defer.resolve(playList);
        });
        return defer.promise;
    }

    function constructListOfArtistsFromResponse(data) {
        var playList = {data:[], release_date:null, image:albumSelected.cover };
        angular.forEach(data, function (item) {
            playList.data.push({id:++id,title: item.title, artist: item.artist.name, time: item.duration/*TODO filter*/});
        });
        return playList;
    }
});

