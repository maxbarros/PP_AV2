"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject() {
        this.observerList = [];
    }
    Subject.prototype.setState = function (state) {
        this.state = state;
        this.notifyObservers();
    };
    Subject.prototype.getState = function () {
        return this.state;
    };
    Subject.prototype.addObserver = function (observer) {
        this.observerList.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observerList.splice(this.observerList.indexOf(observer), 1);
    };
    Subject.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observerList; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.update();
        }
    };
    return Subject;
}());
exports.Subject = Subject;
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.update = function () { };
    ;
    return Observer;
}());
exports.Observer = Observer;
