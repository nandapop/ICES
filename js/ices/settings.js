'use strict';

angular.module('ices').controller('settings', function ($translatePartialLoader,$translate) {

    $translatePartialLoader.addPart('main');
    $translate.refresh();

    function changeLang(langKey) {
        $translate.use(langKey);
    }

    this.changeLang = changeLang;
    this.title = 'MAIN_TITLE_INDEX';
});