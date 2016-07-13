class Controller {
    transportationFee: string;
    expressFee: string;
    buyTwoWay: boolean;
    studentDiscount: boolean;
    twoWayDiscount: boolean;

    twoWayDiscountCheck1: boolean;
    twoWayDiscountCheck2: boolean;

    studentDiscountCheck1: boolean;
    studentDiscountCheck2: boolean;
    studentDiscountCheck3: boolean;

    constructor() {
        this.transportationFee = '' + 8750;
        this.expressFee = '' + 4870;
    }

    formula(): string {
        let result = this.transportationFee;
        if (this.twoWayDiscount) {
            result += " * 0.9";
        }
        if (this.studentDiscount) {
            result += " * 0.8"
        }
        if (parseInt(this.expressFee, 10) > 0) {
            result += " + " + this.expressFee;
        }
        result = "floor10(" + result + ")";
        if (this.buyTwoWay) {
            result += " * 2";
        }
        return result;
    }

    result(): number {
        let result = parseInt(this.transportationFee, 10);
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
    }

    buyTwoWayChange(): void {
        if (this.buyTwoWay == false) {
            this.twoWayDiscount = false;
        }
    }

    private floor10(value: number): number {
        return Math.floor(value / 10) * 10;
    }

    isTwoWayDiscountInvalid(): boolean {
        return this.twoWayDiscount &&
            !(this.twoWayDiscountCheck1 && this.twoWayDiscountCheck2);
    }

    isStudentDiscountInvalid(): boolean {
        return this.studentDiscount &&
            !(this.studentDiscountCheck1 && this.studentDiscountCheck2 && this.studentDiscountCheck3)
    }
}

var App = angular.module('App', []);
App.controller('Controller', Controller);