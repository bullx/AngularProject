/**
 * Created by Karan on 19-Dec-16.
 */
(function(){
    var app = angular.module('store-directives', []);

    app.directive("productDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "/AngularProject/html/product-description.html"
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: "/AngularProject/html/product-reviews.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict:"A",
            templateUrl: "/AngularProject/html/product-specs.html"
        };
    });

    app.directive("productTabs", function() {
        return {
            restrict: "E",
            templateUrl: "/AngularProject/html/product-tabs.html",
            controller: function() {
                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });

    app.directive("productGallery", function() {
        return {
            restrict: "E",
            templateUrl: "/AngularProject/product-gallery.html",
            controller: function() {
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: "gallery"
        };
    });
})();
