'use strict';

angular.module('ices').controller('icesCommunity', function ($translatePartialLoader, $translate) {
     
    $translatePartialLoader.addPart('icesCommunity');
    $translate.refresh();
});