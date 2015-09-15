/**
 * Created with IntelliJ IDEA.
 * User: efield
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

tidalApp.factory('searchAlbumsService', function( $http, $q){

        return function(artistName) {

            var defer = $q.defer();
            var url = "http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&q=" + artistName+"/albums";

            $http.jsonp(url)
                .success(function(response) {
                    defer.resolve(response);
                    console.log(response);
                }).error(function(){
                    defer.resolve(null);
                });

            return defer.promise;
        };

});

