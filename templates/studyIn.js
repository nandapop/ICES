'use strict';

angular.module('ices').controller('studyIn', function ($translatePartialLoader, $translate) {
     
    $translatePartialLoader.addPart('studyIn');
    $translate.refresh();
});