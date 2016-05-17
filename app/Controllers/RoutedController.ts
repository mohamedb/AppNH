module AppNHModule {
    /**
     * Déclarer une interface pour les types
     */
    export interface IRouted extends angular.IScope {
         players:Array<any>;
    }
    /**
     * Le controller
     */
    export class RoutedController {
        
        /**
         * Injection des dépendences
         */
        public static $inject = [
            '$scope',
            '$location'
        ];

        constructor(
            private $scope: IRouted,
            private $location: ng.ILocationService
        ) {
            console.log("Routed-Controller!");
            $scope.players=[{"N":"10"},{"N":"07"}];

        }
    }
    /**
     * Assossier le controlleur au Module.
     */
   angular.module('AppNH').controller("routedController",RoutedController);
}