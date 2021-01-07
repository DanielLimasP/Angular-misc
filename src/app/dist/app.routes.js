"use strict";
exports.__esModule = true;
exports.FeatureRoutingModule = void 0;
var home_component_1 = require("./components/home/home.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
var FeatureRoutingModule = /** @class */ (function () {
    function FeatureRoutingModule() {
    }
    return FeatureRoutingModule;
}());
exports.FeatureRoutingModule = FeatureRoutingModule;
