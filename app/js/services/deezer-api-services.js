/**
 * Created with IntelliJ IDEA.
 * User: jiju k jose
 * Date: 9/15/15
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */

"use strict";
tidalApp.provider('deezerServiceProvider', function () {


    this.$get = function ($q) {
        return function (url) {
            var defer = $q.defer();

            DZ.api(url, function (response) {
                defer.resolve(response);
            });
            return defer.promise;
        };
    };
});

