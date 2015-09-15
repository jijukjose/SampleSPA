/**
 * Created with IntelliJ IDEA.
 * User: efield
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

tidalApp.factory('searchArtistsService', function( $http, $q){

        return function(artistsName) {

            var defer = $q.defer();

//            $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&q=" + artistsName+"&sessionId=a0390065-e0e8-4250-ba3a-61a2d93a3f03&countryCode=NO&limit=3&offset=0&types=ARTISTS")
//            $http.get("http://api.deezer.com/search?q=Prince")
//                .success(function(response) {
//                    alert(response);
//                    defer.resolve(response);
//                }).error(function(err){
//                    defer.resolve(null);
//                });
            var url = "http://api.deezer.com/2.0/artist/27/top";

            $http.get({method: 'GET', url: url
            }).success(function(response) {
                    alert(response);
                    defer.resolve(response);
                }).error(function(err){
                    defer.resolve(null);
                });


            return defer.promise;
        };

});

