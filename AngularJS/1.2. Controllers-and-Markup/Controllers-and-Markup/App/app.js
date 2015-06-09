(function() {
    "use strict";

    angular.module("app", [])
        .constant("WebSite", {
            url: "http://VGeorgiev.org/",
            port: 80
        })
        .value("visitors", {
            count: 4,
            names: ['Vlado', 'Svetlin', 'Petya', 'Hristo']
        })
        .controller("mainCtrl", function($scope, visitors, WebSite) {
            $scope.name = "Vlado";
            $scope.visitors = visitors.names;
            $scope.webSite = WebSite.url;
        });
}());