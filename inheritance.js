var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Animal class, with name parameter and move, makeSound methodes.
 * @class Animal,
 */
var Animal = (function () {
    //Constructer.
    function Animal(animalName) {
        this.name = animalName;
    }
    // move method to pring distance covered by animal.
    Animal.prototype.move = function (distance) {
        console.log(this.name + " covers " + distance + "KMPH");
    };
    // makeSound method to pring sound made by animal.
    Animal.prototype.makeSound = function (sound) {
        console.log(this.name + " makes sound \"" + sound + "\"");
    };
    return Animal;
}());
// Tigaer class inheriting Animal.
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    // Tiger constructor.
    function Tiger(name, tigerColor) {
        var _this = _super.call(this, name) || this;
        _this.color = tigerColor;
        return _this;
    }
    // Method to display tiger infromation.
    Tiger.prototype.dispalyTigerInfo = function () {
        console.log("Tiger with Name: " + this.name + " is " + this.color + "in Color");
    };
    return Tiger;
}(Animal));
// parrot class inheriting Animal.
var Parrot = (function (_super) {
    __extends(Parrot, _super);
    // Parrot constructor.
    function Parrot(name, legs) {
        var _this = _super.call(this, name) || this;
        _this.noOfLegs = legs;
        return _this;
    }
    // Method to display parrot information.
    Parrot.prototype.dispalyParrotInfo = function () {
        console.log("Parrot with Name: " + this.name + ", number of Legs: " + this.noOfLegs);
    };
    return Parrot;
}(Animal));
var whiteTiger = new Tiger("Shera", "White");
whiteTiger.move(100);
whiteTiger.makeSound("Roaaar");
whiteTiger.dispalyTigerInfo();
var twoLegsparrot = new Parrot("Chiluka", 2);
twoLegsparrot.move(20);
twoLegsparrot.makeSound("Chichu, chichu");
twoLegsparrot.dispalyParrotInfo();
