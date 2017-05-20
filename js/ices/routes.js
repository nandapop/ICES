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

        .state("icesCommunity.requirements", {
            url:'/',
            templateUrl: "template/icesCommunity/requirements.html"
//            controller: "",
//            controllerAs: "",
        })

        .state("icesCommunity.benefit", {
            url:'/',
            templateUrl: "template/icesCommunity/benefit.html"
//            controller: "",
//            controllerAs: "",
    })
        .state("icesCommunity.membership", {
            url:'/',
            templateUrl: "template/icesCommunity/membership.html"
//            controller: "",
//            controllerAs: "",
})
        .state("icesCommunity.form", {
            url:'/',
            templateUrl: "template/icesCommunity/form.html"
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