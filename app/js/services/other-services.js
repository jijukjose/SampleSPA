
    tidalApp.filter('unique', function() {
        var idOfTheAlbum=0;
        return function(collection, keyname) {
            var output = [],
                keys = [];

            angular.forEach(collection, function(item) {
                var key = item[keyname];
                if(keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });
            angular.forEach(output,function(item){
                item.id = ++idOfTheAlbum;
            });

            return output;
        };
    });

