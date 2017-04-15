'use strict';

// TODO: Do we need to anotate this $stateProvider ref
angular.module('ices').config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("main", {
            url: '/',
            templateUrl: "templates/main.html"
//            controller: "",
//            controllerAs: ""
        });

});
