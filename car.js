class Car {
    constructor(make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    getDescription() {
        return `It's a ${this.year} ${this.make} ${this.model}`
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year)
        this.range = range
    }

    getDescription() {
        return `It's a ${this.make}, model ${this.model}, year ${this.year}, and the range is ${this.range}`
    }
}