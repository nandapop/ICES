'use strict';

angular.module('ices').controller('posts', function ($translatePartialLoader, $translate) {
     
    $translatePartialLoader.addPart('posts');
    $translate.refresh();
});