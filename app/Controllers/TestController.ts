module AppNHModule {
    /**
     * Déclarer une interface pour les types
     */
    export interface ITest extends angular.IScope {
         users:Array<any>;
    }
    /**
     * Le controller
     */
    export class TestController {
        
        /**
         * Injection des dépendences
         */
        public static $inject = [
            '$scope',
            '$location'
        ];

        constructor(
            private $scope: ITest,
            private $location: ng.ILocationService
        ) {
            console.log("Loaded");
            $scope.users=[{"name":"med"},{"name":"mia"}];

        }
    }
    /**
     * Assossier le controlleur au Module.
     */
   angular.module('AppNH').controller("testController",TestController);
}