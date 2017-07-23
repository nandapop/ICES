'use strict';

angular.module("ices").directive("newsItem", function() {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            title: '=',
            image: '=',
            descr: '=',
            link:  '='
        },
        bindToController: true,
        controller: [controller],
        controllerAs: 'newsItemCtrl',
        templateUrl: 'news/newsItem/newsItem.html'
    };

    function controller() {
        
    }
});