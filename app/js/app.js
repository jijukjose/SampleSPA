'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute','ng-bootstrap-datepicker']);
eventsApp.config(function($routeProvider) {

    $routeProvider.when("/personalInfo", {
        templateUrl:"template/PersonalInfo.html",
        controller: 'PersonalInfoController'
    });

    $routeProvider.when("/workInfo", {
        templateUrl:"template/WorkInfo.html",
        controller: 'WorkInfoController'
    });

    $routeProvider.when("/travelDoc", {
        templateUrl:"template/TravelDoc.html",
        controller: 'TravelDocController'
    });

    $routeProvider.when("/docs", {
        templateUrl:"template/Docs.html",
        controller: 'DocsController'
    });

    $routeProvider.when("/summary", {
        templateUrl:"template/Summary.html",
        controller: 'SummaryController'
    });
    $routeProvider.when("/finish", {
            templateUrl:"template/Finish.html"
        });

});
