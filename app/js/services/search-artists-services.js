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

            $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&q=" + artistsName)
                .success(function(response) {
                    defer.resolve(response);
                });

            return defer.promise;
        };

});

