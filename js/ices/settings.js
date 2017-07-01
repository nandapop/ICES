'use strict';

angular.module('ices').controller('settings', function ($translate) {

    function changeLang(langKey) {
        $translate.use(langKey);
    }

    this.changeLang = changeLang;
    this.title = 'MAIN_TITLE_INDEX';
});