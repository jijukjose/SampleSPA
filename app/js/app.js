'use strict';

var tidalApp = angular.module('tidalApp', []);
/*TODO: remove comment*/
/*TODO: 'use strict' in all the files*/
$(".btn-xl").mouseup(function(){
    $(this).blur();
});


var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
        var matches, substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substringRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
            if (substringRegex.test(str)) {
                matches.push(str);
            }
        });

        cb(matches);
    };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: substringMatcher(states)
    });
//tidalApp.config(function($routeProvider) {
//
//    $routeProvider.when("/personalInfo", {
//        templateUrl:"template/PersonalInfo.html",
//        controller: 'PersonalInfoController'
//    });
//
//    $routeProvider.when("/workInfo", {
//        templateUrl:"template/WorkInfo.html",
//        controller: 'WorkInfoController'
//    });
//
//    $routeProvider.when("/travelDoc", {
//        templateUrl:"template/TravelDoc.html",
//        controller: 'TravelDocController'
//    });
//
//    $routeProvider.when("/docs", {
//        templateUrl:"template/Docs.html",
//        controller: 'DocsController'
//    });
//
//    $routeProvider.when("/summary", {
//        templateUrl:"template/Summary.html",
//        controller: 'SummaryController'
//    });
//    $routeProvider.when("/finish", {
//            templateUrl:"template/Finish.html"
//        });
//
//});

