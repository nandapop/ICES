'use strict';

angular.module('ices').controller('event', function ($translatePartialLoader, $translate) {
     
    $translatePartialLoader.addPart('event');
    $translate.refresh();
});