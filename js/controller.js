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
    })

    .controller('sgController', function ($scope, $state, loginOperation) {
        
        loginOperation.suggestion().success(function (recData) {
            if (recData) {
                    //console.log(recData);
                $scope.suggestions = recData;
                $scope.singleSg = function (index) {
                    console.log(index);
                    window.localStorage.setItem("lastname", index);
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
                //var i = sessionStorage.getItem("curentSug");
                //console.log(i);
                $scope.singleRm = recData.items[11];
                }
                }).error(function () {
            console.log("Request failed");
        });
    
        


    });   