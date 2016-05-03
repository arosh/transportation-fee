class Controller {
    transportationFee: number;
    expressFee: number;
    buyTwoWay: boolean;
    studentDiscount: boolean;
    twoWayDiscount: boolean;

    constructor() {
        this.transportationFee = 9830;
        this.expressFee = 5290;
        this.buyTwoWay = true;
    }

    formula(): string {
        let result = this.transportationFee.toString();
        if (this.twoWayDiscount) {
            result += " * 0.9";
        }
        if (this.studentDiscount) {
            result += " * 0.8"
        }
        if (this.expressFee > 0) {
            result += " + " + this.expressFee.toString();
        }
        result = "floor10(" + result + ")";
        if (this.buyTwoWay) {
            result += " * 2";
        }
        return result;
    }

    result(): number {
        let result = this.transportationFee;
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
    }
    
    buyTwoWayChange(): void {
        if (this.buyTwoWay == false) {
            this.twoWayDiscount = false;
        }
    }

    private floor10(value: number): number {
        return Math.floor(value / 10) * 10;
    }
}

var App = angular.module('App', []);
App.controller('Controller', Controller);