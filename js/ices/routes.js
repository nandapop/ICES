'use strict';

// TODO: Do we need to anotate this $stateProvider ref
angular.module('ices').config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("main", {
            url: '/',
            templateUrl: "templates/main.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("about", {
            url:'/about',
            templateUrl: "templates/about.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("studyIn", {
            url:'/studyIn',
            templateUrl: "templates/studyInSwiss.html"
//            controller: "",
//            controllerAs: "",
        })

        .state("icesCommunity", {
            url:'/icesCommunity',
            templateUrl: "templates/requirements.html"
//            controller: "",
//            controllerAs: "",
        })

        .state("events", {
            url:'/',
            templateUrl: "templates/events.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("news", {
            url:'/',
            templateUrl: "template/news.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("photos", {
            url:'/',
            templateUrl: "template/photos.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("contact", {
            url:'/',
            templateUrl: "template/contact.html"
//            controller: "",
//            controllerAs: "",
        });
});