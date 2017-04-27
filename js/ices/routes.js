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
        .state("about.motivation", {
            url:'/motivation',
            templateUrl: "templates/about/motivation.html"
//            controller: "",
//            controllerAs: "",
        })
          .state("about.goal", {
            url:'/goal',
            templateUrl: "templates/about/goal.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("studyIn", {
            url:'/',
            templateUrl: "templates/studyInSwiss.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("icesCommunity", {
            url:'/',
            templateUrl: "template/icesCommunity.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("events", {
            url:'/',
            templateUrl: "template/events.html"
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