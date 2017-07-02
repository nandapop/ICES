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
            templateUrl: "about/about.html",
            controller: "about",
            controllerAs: "aboutCtrl"
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
            url:'/events',
            templateUrl: "templates/event.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("news", {
            url:'/news',
            templateUrl: "templates/news.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("photos", {
            url:'/',
            templateUrl: "templates/photos.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("contact", {
            url:'/contact',
            templateUrl: "templates/contact.html"
//            controller: "",
//            controllerAs: "",
        });
});