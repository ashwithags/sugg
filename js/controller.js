angular.module('Flicker.controllers', [])

    .controller('loginController', function ($scope,$state) {
        $scope.login = function (loginData) {
            console.log(loginData);
            $state.go('homepage');
        }
        $scope.signUp = function (signUpData) {
            console.log(signUpData);

        }

    })

    .controller('ChController', function ($scope, loginOperation) {
        $scope.myDataSource = loginOperation.graph;
        $scope.name = 'World';
    })

    .controller('sgController', function ($scope, $state, loginOperation) {
        
        loginOperation.suggestion().success(function (recData) {
            if (recData) {
                    //console.log(recData);
                $scope.suggestions = recData;
                $scope.singleSg = function (index) {
                    console.log(index);
                    sessionStorage.setItem("CurentSug", index);
                    $state.go('sugRm');
                }
            }
        }).error(function () {
            console.log("Request failed");
            });

          
    })
    .controller('sgRmController', function ($scope, loginOperation) {
     
        loginOperation.suggestion().success(function (recData) {
            if (recData) {
                var i = sessionStorage.getItem("CurentSug");
                console.log(i);
                $scope.suggestions = recData;
                $scope.singleRm = recData.items[i];
                }
                }).error(function () {
            console.log("Request failed");
        });
    
        


    });   