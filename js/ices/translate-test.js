'use strict';

angular.module('ices').config(function($translateProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {  
        urlTemplate: '/translate/{part}/{lang}.json'
    });
    $translateProvider.determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
});

