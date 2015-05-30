app.controller('SearchContent', ['$scope',function ($scope) {


$scope.test = [
    {kaka: "aka"},
    {kaka: "aka"},
    {kaka: "aka"},
    {kaka: "aka"},
    {kaka: "aka"}
];



    $scope.te = 'fddf';

    $scope.intest = function (input) {
        $scope.test.push({kaka:input})
        console.log(input)
    }
}]);