(function() {
    "use strict";

    angular.module("app", [])
        .controller("mainCtrl", function($scope) {
            var colors = ['red', 'green', 'blue', 'purple', 'yellow'];

            $scope.name = "Vlado";
            $scope.onTextBoxNameChange = function () {
                var rand = Math.floor((Math.random() * 5));
                $scope.inputStyle = { 'background-color': colors[rand] };
            }
        });
}());