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
            templateUrl: "news/newsSection.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("post_encuentro2017", {
            url:'/post_encuentro2017',
            templateUrl: "news/posts/encuentro2017.html"
        })
          .state("post_buzon", {
            url:'/post_buzon',
            templateUrl: "news/posts/buzonAcademico.html"
        })
        .state("post_papayapods", {
            url:'/post_papayapods',
            templateUrl: "news/posts/papayapods.html"
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