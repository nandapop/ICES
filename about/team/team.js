'use strict';

angular.module("ices").directive("team", function() {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            items: '='
        },
        bindToController: true,
        controller: [controller],
        controllerAs: 'teamCtrl',
        templateUrl: 'about/team/team.html'
    };

    function controller() {
        
    }
});
