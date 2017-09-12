'use strict';

angular.module('ices').controller('interviews', function ($translatePartialLoader, $translate) {
     
    $translatePartialLoader.addPart('interviews');
    $translate.refresh();
});