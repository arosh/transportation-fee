var Controller = (function () {
    function Controller() {
        this.transportationFee = 9830;
        this.expressFee = 5290;
        this.buyTwoWay = true;
    }
    Controller.prototype.formula = function () {
        var result = this.transportationFee.toString();
        if (this.twoWayDiscount) {
            result += " * 0.9";
        }
        if (this.studentDiscount) {
            result += " * 0.8";
        }
        if (this.expressFee > 0) {
            result += " + " + this.expressFee.toString();
        }
        result = "floor10(" + result + ")";
        if (this.buyTwoWay) {
            result += " * 2";
        }
        return result;
    };
    Controller.prototype.result = function () {
        var result = this.transportationFee;
        if (this.twoWayDiscount) {
            result *= 0.9;
        }
        if (this.studentDiscount) {
            result *= 0.8;
        }
        result += this.expressFee;
        result = this.floor10(result);
        if (this.buyTwoWay) {
            result *= 2;
        }
        return result;
    };
    Controller.prototype.buyTwoWayChange = function () {
        if (this.buyTwoWay == false) {
            this.twoWayDiscount = false;
        }
    };
    Controller.prototype.floor10 = function (value) {
        return Math.floor(value / 10) * 10;
    };
    return Controller;
}());
var App = angular.module('App', []);
App.controller('Controller', Controller);
