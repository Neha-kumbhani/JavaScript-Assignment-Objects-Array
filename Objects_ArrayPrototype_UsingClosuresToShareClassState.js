var numberOfCats = 0;
var totalWeight = 0;

// Let's make a Cat constructor!
var Cat = (function () {
    'use strict';
    return function (name, initWeight) {
        var w = initWeight;
        if (name === undefined || initWeight === undefined) {
            throw new Error("Both name and weight must be specified");
        }
        Object.defineProperty(this, 'weight', {
            set: function (newWeight) {
                totalWeight = totalWeight - w + newWeight;
                w = newWeight;
            }, get: function () {
                return w;
            }
        });

        numberOfCats++;
        totalWeight += initWeight;
        return this;
    };
}());

Cat.averageWeight = function () {
    "use strict";
    return totalWeight / numberOfCats;
};

garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // 25

garfield = new Cat('garfield'); // Both name and weight must be specified

felix = new Cat('felix', 15);
console.log(Cat.averageWeight());   // now 20

felix.weight = 25;
felix.weight // 25
console.log(Cat.averageWeight()); // now 25
