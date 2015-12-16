/**
 * 1. Se crea el modelo con angular.module (la variable app es opcional).
 * 2. Se pasa el nombre del modelo que se encuentra en el html ng-app="NombreModulo".
 * 3. como segundo argumento se pasa un arreglo, en caso de usar una librería externa.
 */
var app = angular.module("ToDoList",["LocalStorageModule"]);

/**
 * 4. Se le pasan los controladores al modelo, a través de la variable app => (app.controller).
 * 5. como primer parámetro se pasa el nombre del controlador que se encuentra en el html ng-controller="NombreController"
 * 6. como segundo parámetro se pasa una función anónima que recibe como argumentos (inyecciones de dependencias) la variable $scope.
 *     *la variable $scope nos permite sincronizar el angular con nuestro html, a través de ng*
 */

app.controller("ToDoController",function($scope,localStorageService){

    if(localStorageService.get("angular-todolist")){
        $scope.todo = localStorageService.get("angular-todolist");
    } else {
        $scope.todo = [];
    }
    /**
     * Método $watch
     * 1. Recibe dos funciones anónimas.
     * 2. La primera no recibe parámetros pero retorna un valor.
     * 3. La segunda recibe 2 parámetros, el valor nuevo y el valor anterior
     */

    //watchColletion se utliza para arreglos

    /*$scope.$watchColletion(function(){
        return $scope.newActv;
    },function(newValue,OldValue){
        console.log(newValue);
        console.log(OldValue);
    });*/

    $scope.$watchColletion(function(newValue,oldValue){
        localStorageService.set("angular-todolist",$scope.todo);
    });

    $scope.addActv = function(){
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    }

    $scope.clean = function(){
        $scope.todo = [];
    }
});