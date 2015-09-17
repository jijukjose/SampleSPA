"use strict";
tidalApp.directive('searchResult', function () {
    return {
        restrict:'E',
        template:'<div ng-if="searchAlbumsVisible" class=" col-md-7 searchresult">Search results for "{{currentArtistSearched}}"</div>'
    };

});