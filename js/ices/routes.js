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
            templateUrl: "templates/studyInSwiss.html",
            controller: "studyIn",
            controllerAs: "studyInCtrl",
        })

        .state("icesCommunity", {
            url:'/icesCommunity',
            templateUrl: "templates/requirements.html",
            controller: "icesCommunity",
            controllerAs: "icesCommunityCtrl",
        })

        .state("events", {
            url:'/events',
            templateUrl: "templates/event.html",
            controller: "event",
            controllerAs: "eventCtrl",
        })
        .state("news", {
            url:'/news',
            templateUrl: "news/newsSection.html",
            controller: "news",
            controllerAs: "newsCtrl",
        })
        .state("post_encuentro2017", {
            url:'/post_encuentro2017',
            templateUrl: "news/posts/encuentro2017.html",
            controller: "posts",
            controllerAs: "postsCtrl"
        })
          .state("post_buzon", {
            url:'/post_buzon',
            templateUrl: "news/posts/buzonAcademico.html",
            controller: "posts",
            controllerAs: "postsCtrl"
        })
        .state("post_papayapods", {
            url:'/post_papayapods',
            templateUrl: "news/posts/papayapods.html"
        })
        .state("post_trump", {
            url:'/post_trump',
            templateUrl: "news/posts/trump.html"
        })
        .state("post_encuentro2016", {
            url:'/post_encuentro2016',
            templateUrl: "news/posts/encuentro2016.html"
        })
        .state("post_chilenosExtranjeros", {
            url:'/post_chilenosExtranjeros',
            templateUrl: "news/posts/chilenosExtranjeros.html"
        })
        .state("post_avisoEncuentro", {
            url:'/post_avisoEncuentro',
            templateUrl: "news/posts/avisoEncuentro2016.html"
        })
        .state("post_chile_encuentro_global", {
            url:'/post_chile_encuentro_global',
            templateUrl: "news/posts/chileEncuentroGlobal.html"
        })
        .state("post_creacionIces", {
            url:'/post_creacionIces',
            templateUrl: "news/posts/creacionIces.html"
        })
        .state("post_puentes", {
            url:'/post_puentes',
            templateUrl: "news/posts/construyendoPuentes.html"
        })
        .state("post_chile_global", {
            url:'/post_chile_global',
            templateUrl: "news/posts/chileGlobal.html"
        })
        .state("post_eth_apoyo", {
            url:'/post_eth_apoyo',
            templateUrl: "news/posts/ethApoyo.html"
        })
        .state("post_embajador", {
            url:'/post_embajador',
            templateUrl: "news/posts/embajador.html"
        })
        .state("post_berna2014", {
            url:'/post_berna2014',
            templateUrl: "news/posts/berna.html"
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