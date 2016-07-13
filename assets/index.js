var Controller = (function () {
    function Controller() {
        this.transportationFee = '' + 8750;
        this.expressFee = '' + 4870;
        this.buyTwoWay = true;
    }
    Controller.prototype.formula = function () {
        var result = this.transportationFee;
        if (this.twoWayDiscount) {
            result += " * 0.9";
        }
        if (this.studentDiscount) {
            result += " * 0.8";
        }
        if (parseInt(this.expressFee, 10) > 0) {
            result += " + " + this.expressFee;
        }
        result = "floor10(" + result + ")";
        if (this.buyTwoWay) {
            result += " * 2";
        }
        return result;
    };
    Controller.prototype.result = function () {
        var result = parseInt(this.transportationFee, 10);
        if (this.twoWayDiscount) {
            result *= 0.9;
        }
        if (this.studentDiscount) {
            result *= 0.8;
        }
        result += parseInt(this.expressFee, 10);
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
    Controller.prototype.isTwoWayDiscountInvalid = function () {
        return this.twoWayDiscount &&
            !(this.twoWayDiscountCheck1 && this.twoWayDiscountCheck2);
    };
    Controller.prototype.isStudentDiscountInvalid = function () {
        return this.studentDiscount &&
            !(this.studentDiscountCheck1 && this.studentDiscountCheck2 && this.studentDiscountCheck3);
    };
    return Controller;
}());
var App = angular.module('App', []);
App.controller('Controller', Controller);
