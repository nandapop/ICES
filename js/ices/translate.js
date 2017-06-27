'use strict';

angular.module('ices').config(function($translateProvider) {
    $translateProvider.translations('en', {
        'TITLE': 'Hello',
        'FOO': 'This is a paragraph'
    });

    $translateProvider.translations('es', {
        'TITLE': 'Hola',
        'FOO': 'Este es un párrafo'
    });

    $translateProvider.determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
});